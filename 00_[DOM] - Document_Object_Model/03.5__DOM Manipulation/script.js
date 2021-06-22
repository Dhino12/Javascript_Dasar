        //=====================================================
        //documnet.createElement()      | Membuat Element
        //=====================================================
        const pbaru = document.createElement('p');
        //=====================================================

        //=====================================================
        //document.createTextNode()     | Menuliskan Text dalam element
        //=====================================================
        const textPbaru = document.createTextNode('Paragraf Baru');
        //=====================================================

        //=====================================================
        //node.appendChild();           | Menyimpan kedalam element 
        //=====================================================
        pbaru.appendChild(textPbaru);
        //Simpan pbaru kedalam section A
        const sectionA = document.getElementById('a');
        sectionA.appendChild(pbaru);
        //=====================================================

        //=====================================================
        //node.insertBefore();          | Menyimpan element sebelum
        //=====================================================
        const liBaru = document.createElement('li');
        const textLiBaru = document.createTextNode('Item Baru');
        liBaru.appendChild(textLiBaru);

        const ul = document.querySelector('section#b ul');
        const li2 = ul.querySelector('li:nth-child(2)');

        ul.insertBefore(liBaru, li2);
        //=====================================================

        //=====================================================
        //parrentNode.removeChild();      | Menghilangkan Element
        //=====================================================
        const link = document.getElementsByTagName('a')[0];
        sectionA.removeChild(link);
        //=====================================================

        //=====================================================
        //parrentNode.replaceChild();     | Mengganti Element
        //=====================================================
        const h2Baru = document.createElement('h2');
        const textH2Baru = document.createTextNode('judul Baru');

        h2Baru.appendChild(textH2Baru);
        const sectionB = document.getElementById('b');
        const p4 = sectionB.querySelector('p');

        sectionB.replaceChild(h2Baru, p4);
        //=====================================================

        // Yang Element Baru Diberi Warna crimson =============
        pbaru.style.backgroundColor = 'crimson';
        liBaru.style.backgroundColor = 'crimson';
        h2Baru.style.backgroundColor = 'crimson';