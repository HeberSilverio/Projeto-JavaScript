import argparse
import os
import time
import logging
import fitz  # PyMuPDF

# Configuração do logging
logging.basicConfig(
    filename="process_pdfs.log",
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

# Configuração dos argumentos
parser = argparse.ArgumentParser()
parser.add_argument("--cliente", help="Nome do cliente", type=str, required=True)
parser.add_argument("--nota_fiscal", help="Numero da NF", type=str, required=True)
parser.add_argument("--data_emissao", help="Data de emissão da NF", type=str, required=True)
parser.add_argument("--input_dir", help="Diretorio de entrada", type=str, required=True)
parser.add_argument("--output_dir", help="Diretorio de saida", type=str, required=True)
args = parser.parse_args()


def replace_text_in_pdf(input_pdf, output_pdf, replacements):
    try:
        logging.info(f"Processando arquivo: {input_pdf}")
        
        rect_offsets = {
            "Cliente:": (146, 1),
            "Nota Fiscal:": (147, 2),
            "Data emissão NF:": (101, 2)
        }
        text_offsets = {
            "Cliente:": (149, 13),
            "Nota Fiscal:": (147, 13.5),
            "Data emissão NF:": (101, 13)
        }
        rect_sizes = {
            "Cliente:": (409, 15),
            "Nota Fiscal:": (80, 13),
            "Data emissão NF:": (150, 13)
        }

        # Texto adicional
        additional_text = "Nota Fiscal / Pedido:"
        additional_text_rect_position = (20, 225)
        additional_text_position = (20, 235)
        additional_text_rect_size = (100, 11)

        # Abrir o PDF
        doc = fitz.open(input_pdf)
        page = doc.load_page(0)

        # Substituição de textos
        for old_text, new_text in replacements.items():
            text_instances = page.search_for(old_text)
            if text_instances:
                rect = text_instances[0]
                rect_x_offset, rect_y_offset = rect_offsets.get(old_text, (0, 0))
                new_rect_x0 = rect.x0 + rect_x_offset
                new_rect_y0 = rect.y0 + rect_y_offset

                rect_width, rect_height = rect_sizes.get(old_text, (rect.width, rect.height))
                new_rect_x1 = new_rect_x0 + rect_width
                new_rect_y1 = new_rect_y0 + rect_height

                # Desenha retângulo branco
                page.draw_rect(fitz.Rect(new_rect_x0, new_rect_y0, new_rect_x1, new_rect_y1),
                               color=(1, 1, 1), fill=(1, 1, 1))

                # Adiciona o novo texto
                text_x_offset, text_y_offset = text_offsets.get(old_text, (0, 0))
                new_text_x = rect.x0 + text_x_offset
                new_text_y = rect.y0 + text_y_offset

                page.insert_text((new_text_x, new_text_y), new_text, fontsize=10, fontname="helv", color=(0, 0, 0))

        # Adiciona texto extra
        page.draw_rect(fitz.Rect(additional_text_rect_position[0], additional_text_rect_position[1],
                                 additional_text_rect_position[0] + additional_text_rect_size[0],
                                 additional_text_rect_position[1] + additional_text_rect_size[1]),
                       color=(1, 1, 1), fill=(1, 1, 1))
        page.insert_text((additional_text_position[0], additional_text_position[1]),
                         additional_text, fontsize=10, fontname="Helvetica-Bold", color=(0, 0, 0))

        doc.save(output_pdf)
        logging.info(f"Arquivo salvo em: {output_pdf}")
        doc.close()

    except Exception as e:
        logging.error(f"Erro ao processar PDF {input_pdf}: {e}")


def process_pdfs():
    try:
        input_dir = args.input_dir
        output_dir = args.output_dir

        # Substituições
        replacements = {
            "Cliente:": args.cliente,
            "Nota Fiscal:": args.nota_fiscal,
            "Data emissão NF:": args.data_emissao
        }

        if not os.path.exists(input_dir):
            logging.error(f"Diretório de entrada '{input_dir}' não existe.")
            return

        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            logging.info(f"Diretório de saída '{output_dir}' criado.")

        for filename in os.listdir(input_dir):
            if filename.endswith('.pdf'):
                input_pdf = os.path.join(input_dir, filename)
                output_pdf = os.path.join(output_dir, filename)

                # Substituição no PDF
                replace_text_in_pdf(input_pdf, output_pdf, replacements)

                # Remove arquivo de entrada
                os.remove(input_pdf)
                logging.info(f"Arquivo removido: {input_pdf}")

    except Exception as e:
        logging.error(f"Erro durante o processamento dos PDFs: {e}")


if __name__ == "__main__":
    try:
        logging.info("Início do processamento...")
        process_pdfs()
        logging.info("Processamento concluído com sucesso.")
    except Exception as e:
        logging.critical(f"Erro fatal: {e}")
    finally:
        time.sleep(5)
