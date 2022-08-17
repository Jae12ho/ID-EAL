const axios = require('axios');

const korName = "양재호";
const initial = "YJH"
const birthDay = "20020412";
const dot_ = ['._', '._', '_.', '_.', '._.', '_'];
const nameMeaning = ['들보', '재상', '호걸'];
// const nameMeaning = undefined;

const birthStone = {
  '01': ['Garnet'],
  '02': ['Amethyst'],
  '03': ['Aquamarine', 'Bloodstone', 'Coral'],
  '04': ['Diamond', 'Crystal'],
  '05': ['Emerald', 'Chrysoprase', 'Jade'],
  '06': ['Pearl', 'Moonstone', 'Alexandrite'],
  '07': ['Ruby', 'Carnelian'],
  '08': ['Peridot', 'Sardonyx', 'spinel'],
  '09': ['Sapphire', 'Lapis_Lazuli', 'Lolite'],
  '10': ['Opal', 'Tourmaline'],
  '11': ['Topaz', 'Citrine', 'Amber'],
  '12': ['Turquoise', 'Tanzanite', 'Zircon'],
}

const birthFlower = {
  '01': 'Narcissus',
  '02': 'Viola',
  '03': 'Narcissus',
  '04': 'SweetPea',
  '05': 'Majalis',
  '06': 'Lily',
  '07': 'Ranunculus',
  '08': 'Gladiolus',
  '09': 'Myosotis',
  '10': 'Calendula',
  '11': 'Asteraceae',
  '12': 'poinsettia',
}

let answerList = []

async function run() {

  answerList.push(await hanja_hanja(korName, nameMeaning));
  answerList.push(await birthStone_hanja(birthDay, korName, nameMeaning));
  answerList.push(await birthFlower_hanja(birthDay, korName, nameMeaning));
  answerList.push(await birthStone_birthFlower(birthDay));
  answerList.push(await initial_hanja(korName, initial, nameMeaning));

  console.log('한자 + 한자 : ', answerList[0]);
  console.log('탄생석 + 한자 : ', answerList[1]);
  console.log('탄생화 + 한자 : ', answerList[2]);
  console.log('탄생석 + 탄생화 : ', answerList[3]);
  console.log('이니셜 + 한자 : ', answerList[4]);

}
run();


// 한자 + 한자 조합
async function hanja_hanja(korName, nameMeaning=undefined) {
  const n = randomNum(3);
  
  if (nameMeaning) {
    let answer = await translate(nameMeaning[n]) + dot_[randomNum(dot_.length)] + await translate(nameMeaning[n == 2 ? 0 : n + 1]);
  
    return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), nameMeaning[n] + "," + nameMeaning[n == 2 ? 0 : n + 1]];

  } else {
    let answer = await parse(korName[n]) + dot_[randomNum(dot_.length)] + await parse(korName[n == 2 ? 0 : n + 1]);

    return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), answer.replace(/[a-zA-Z.]/g, '')];
  }
}

// 탄생석 + 한자 조합
async function birthStone_hanja(birthDay, korName, nameMeaning=undefined) {
  let answer = '';
  birthMonth = birthDay.slice(4, 6);
  const n = randomNum(3);
  const engWord = nameMeaning ? await translate(nameMeaning[n]) : await parse(korName[n]);

  if (randomNum(2)) {
    answer = engWord + dot_[randomNum(dot_.length)] + birthStone[birthMonth][randomNum(birthStone[birthMonth].length)];
  } else {
    answer = birthStone[birthMonth][randomNum(birthStone[birthMonth].length)] + dot_[randomNum(dot_.length)] + engWord;
  }

  return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), nameMeaning ? nameMeaning[n] : answer.replace(/[a-zA-Z.]/g, '')];
}

// 탄생화 + 한자 조합
async function birthFlower_hanja(birthDay, korName, nameMeaning=undefined) {
  let answer = '';
  birthMonth = birthDay.slice(4, 6);
  const n = randomNum(3);
  const engWord = nameMeaning ? await translate(nameMeaning[n]) : await parse(korName[n]);

  if (randomNum(2)) {
    answer = engWord + dot_[randomNum(dot_.length)] + birthFlower[birthMonth];
  } else {
    answer = birthFlower[birthMonth] + dot_[randomNum(dot_.length)] + engWord;
  }

  return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), nameMeaning ? nameMeaning[n] : answer.replace(/[a-zA-Z.]/g, '')];
}

// 탄생석 + 탄생화 조합
async function birthStone_birthFlower(birthDay) {
  let answer = '';
  birthMonth = birthDay.slice(4, 6);

  if (randomNum(2)) {
    answer = birthStone[birthMonth][randomNum(birthStone[birthMonth].length)] + dot_[randomNum(dot_.length)] + birthFlower[birthMonth];
  } else {
    answer = birthFlower[birthMonth] + dot_[randomNum(dot_.length)] + birthStone[birthMonth][randomNum(birthStone[birthMonth].length)];
  }

  return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), answer.replace(/[a-zA-Z.]/g, '')];
}

async function initial_hanja(korName, initial, nameMeaning=undefined) {
  let randomNumber = randomNum(3);
  let useInitial = '';
  let answer = '';
  const n = randomNum(3);
  const engWord = nameMeaning ? await translate(nameMeaning[n]) : await parse(korName[n]);

  if (randomNumber == 0) {
    useInitial = initial[n];
  } else if (randomNumber == 1) {
    useInitial = initial.slice(1, 3);
  } else {
    useInitial = initial;
  }

  if (randomNum(2)) {
    answer = useInitial + dot_[randomNum(dot_.length)] + engWord;
  } else {
    answer = engWord + dot_[randomNum(dot_.length)] + useInitial;
  }

  return [answer.replace(/[ㄱ-ㅎ가-힣,\s]/g, ''), nameMeaning ? nameMeaning[n] : answer.replace(/[a-zA-Z.]/g, '')];
}

// random number
function randomNum(n) {
  return Math.floor(Math.random() * n);
}

async function parse(query, nameMeaning=undefined) {
  let word = '';

  if (nameMeaning) {
    nameMeaning.map(e => {
      if (e.slice(-1) == query) {
        word = e.slice(0, -2);
      }
    })
  } else {
    const { data } = await axios.get(
      `https://hanja.dict.naver.com/api3/ccko/search?query=${stringToHex(query, '%')}&m=pc&range=all`,
      {
        headers: {
          referer: 'https://hanja.dict.naver.com/'
        },
      },
    );

    const words = data.searchResultMap.searchResultListMap.LETTER.items.map(e => (
      e.expKoreanPron.replace(/<strong>/g, '').replace(/<\/strong>/g, '').replace(/\//g, ',')
    ))

    let a = []
    words.map(e => {
      if (e.includes(',')) {
        b = e.split(',')
        b.map(e => {
          if (e.includes(query))
            a.push(e.replace(/\([^\)]*\)/g, '').slice(0, -1));
        })
      } else {
        a.push(e.replace(/\([^\)]*\)/g, '').slice(0, -1));
      }
    })

    result = a.map(e => e.replace(/ /g, ''));
    console.log(result);

    word = result[randomNum(result.length)];
  }

  return [await translate(word), word + " " + query];
}


// Meaning to English
async function translate(query) {
  const { data } = await axios.get(
    `https://en.dict.naver.com/api3/enko/search?query=${stringToHex(query, '%')}&m=pc&range=word&page=1&lang=ko&shouldSearchOpen=false&hid=166047839252560420`,
    {
      headers: {
        referer: 'https://en.dict.naver.com/'
      },
    },
  );
  
  const dataValues = data.searchResultMap.searchResultListMap.WORD.items.map(e => e.meansCollector[0].means[0].value)
  console.log("데이터 값 : ", dataValues);

  const words = []
  let tmp = []
  dataValues.map(e => {
    if (e != null) {
      tmp = e.replace(/\([^\)]*\)/g, '').replace(/\[[^\)]*\]/g, '').replace(/[!'\s;\).]*/g, '').replace(/[ㄱ-ㅎ|가-힣]/g, '').split(',');
      tmp.map(e => {
        if (e.length < 15 && e != '') {
          words.push(e);
        }
      })
    }
  })

  console.log(words);

  const result = words[randomNum(words.length)];
  return  result? result : 'o';
}



// UTF8 to Hex
function stringToUTF8Bytes(str) {
  const result = [];

  if (!str) return result;

  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);

    if (c <= 0x7f) {
      result.push(c);
    } else if (c <= 0x07ff) {
      result.push(((c >> 6) & 0x1f) | 0xc0);
      result.push((c & 0x3f) | 0x80);
    } else {
      result.push(((c >> 12) & 0x0f) | 0xe0);
      result.push(((c >> 6) & 0x3f) | 0x80);
      result.push((c & 0x3f) | 0x80);
    }
  }

  return result;
}

function byteToHex(byteNum) {
  const digits = byteNum.toString(16);

  if (byteNum < 16) return `0${digits}`;
  return digits;
}

function bytesToHexString(bytes, join) {
  return `${join}${bytes
    .map((e) => byteToHex(e))
    .join(join)
    .toUpperCase()}`;
}

function stringToHex(str, join) {
  return bytesToHexString(stringToUTF8Bytes(str), join);
}