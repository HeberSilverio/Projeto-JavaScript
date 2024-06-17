const words = ['house', 'train', 'slide', 'book', 'pen', 'car', 'bicycle', 'computer', 'phone', 'keyboard',
    'mouse', 'television', 'monitor', 'headphones', 'charger', 'table', 'chair', 'sofa', 'bed', 'lamp',
    'couch', 'pillow', 'blanket', 'curtain', 'closet', 'mirror', 'toilet', 'shower', 'bathtub', 'sink',
    'refrigerator', 'microwave', 'oven', 'stove', 'dishwasher', 'washer', 'dryer', 'vacuum', 'mop', 'broom',
    'dustpan', 'trash', 'bin', 'window', 'door', 'floor', 'ceiling', 'wall', 'roof', 'stairs', 'elevator',
    'escalator', 'ramp', 'hallway', 'room', 'kitchen', 'living', 'dining', 'bedroom', 'bathroom', 'office', ];

    
    function getPassword() {
        const chars = '0123456789abcdefghijklmno/%?@#$WXYZ';
        const clength = chars.length;
        let password = '';

        while (password.length < 35) {
            password += chars.charAt(Math.floor(Math.random() * clength));

        }

        password = password.replace(/\//g, randoWord());
        document.getElementById('password').value = password;
    }

    function randomNumber(e) {
      return Math.floor(Math.random() * e);
    }

    function randoWord() {
      return words[randomNumber(words.length)];
    }