import argparse
import os
import time

import fitz

parser = argparse.ArgumentParser()
parser.add_argument("--cliente", help="Nome do cliente", type=str, required=True)
parser.add_argument("--nota_fiscal", help="Numero da NF", type=str, required=True)
parser.add_argument("--data_emissao", help="Data de emissão da NF", type=str, required=True)
parser.add_argument("--input_dir", help="Diretorio de entrada", type=str, required=True)
parser.add_argument("--output_dir", help="Diretorio de saida", type=str, required=True)
args = parser.parse_args()


def replace_text_in_pdf(input_pdf, output_pdf, replacements):
    # Tamanho dos retângulos
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

    # Configuração do texto fixo
    additional_text = "Nota Fiscal / Pedido:"
    additional_text_rect_position = (20, 225)
    additional_text_position = (20, 235)
    additional_text_rect_size = (100, 11)

    doc = fitz.open(input_pdf)
    page = doc.load_page(0)

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

            page.draw_rect(fitz.Rect(new_rect_x0, new_rect_y0, new_rect_x1, new_rect_y1), color=(1, 1, 1),
                           fill=(1, 1, 1))

            text_x_offset, text_y_offset = text_offsets.get(old_text, (0, 0))
            new_text_x = rect.x0 + text_x_offset
            new_text_y = rect.y0 + text_y_offset

            page.insert_text((new_text_x, new_text_y), new_text, fontsize=10, fontname="helv", color=(0, 0, 0))

    # Adiciona retângulo 
    additional_rect_x0, additional_rect_y0 = additional_text_rect_position
    additional_rect_width, additional_rect_height = additional_text_rect_size
    additional_rect_x1 = additional_rect_x0 + additional_rect_width
    additional_rect_y1 = additional_rect_y0 + additional_rect_height

    page.draw_rect(fitz.Rect(additional_rect_x0, additional_rect_y0, additional_rect_x1, additional_rect_y1),
                   color=(1, 1, 1), fill=(1, 1, 1))

    # Adiciona texto adicional em negrito
    page.insert_text((additional_text_position[0], additional_text_position[1]), additional_text, fontsize=10,
                     fontname="Helvetica-Bold", color=(0, 0, 0))

    doc.save(output_pdf)


def process_pdfs():
    # Configurações
    input_dir = args.input_dir
    output_dir = args.output_dir

    replacements = {
        "Cliente:": args.cliente,
        "Nota Fiscal:": args.nota_fiscal,
        "Data emissão NF:": args.data_emissao
    }

    if not os.path.exists(input_dir):
        print(f"Input directory '{input_dir}' does not exist.")
        return

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename in os.listdir(input_dir):
        if filename.endswith('.pdf'):
            input_pdf = os.path.join(input_dir, filename)
            output_pdf = os.path.join(output_dir, filename)

            # Substituir texto no PDF
            replace_text_in_pdf(input_pdf, output_pdf, replacements)

            # Remover o PDF da pasta de entrada
            os.remove(input_pdf)
            print(f"Processed {filename} and saved to {output_dir}")


if __name__ == "__main__":
    process_pdfs()
    time.sleep(5)
