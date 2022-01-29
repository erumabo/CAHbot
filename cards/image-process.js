const { Image } = require('image-js');
const fs = require('fs/promises');

function lpad(t,l,f=' '){t=`${t}`;const r=l-t.length;return f.repeat(r>0?r:0)+t;}

const CardDir = './es/white/';

fs.readdir(CardDir).then( sheets => {
  sheets.forEach((sheet,index) => {
    if(sheet == 'crops') return;

    Image.load(CardDir+sheet).then(atlas => {
      const crop = {
        x: 41,
        y: 37,
        width: 1233,
        height: 1528
      };
      crop.width -= crop.x;
      crop.height -= crop.y;

      return atlas.crop(crop);
    }).then(atlas => {
      for(let i = 0; i<4; ++i) {
        for(let j = 0; j<5; ++j) {
            atlas.crop({
              x: 298*i,
              y: 298*j,
              width: 298, height:298
            }).save(`${CardDir}crops/${lpad(index*20+5*i+j,3,'0')}.jpg`);
        }
      }
    })
  });
}).catch(console.error);
