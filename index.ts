import TSON from 'typescript-json'

interface Test {
  this: 'is a';
  test: boolean;
}

TSON.assertEquals<Test>({ fails: true })
