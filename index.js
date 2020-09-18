const con = new RegExp(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,z]/);
const vow = new RegExp(/[a,e,i,o,u,y]/);

const regex = new RegExp(con.source + "*" + "|" + vow.source);
const str = `feet`;
const str2 = `meat`;
let m;

if ((m = regex.exec(str)) !== null) {
  let concat = str2.replace(regex, m[0], `$2`);
  console.log(`${str} ${str2}. ${concat}`);
}
