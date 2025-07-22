 function aaa (aaa?: number): number {
  return aaa || 0;
}

aaa(1);

aaa();

aaa(undefined)

function bbb (bbb: string | undefined): number {
  const result = bbb?.length ?? 0;
  return result;
}

bbb("sとtりんぐ");
bbb(undefined);
const x: string | undefined = "test";
x.length;