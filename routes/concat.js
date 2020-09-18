const con = new RegExp(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/);
const vow = new RegExp(/[a,e,i,o,u,y]/);

const basic = new RegExp(con.source + "*" + "|" + vow.source, "i");

module.exports = {
  concat: function (wordA, wordB) {
    if (([woot] = basic.exec(wordA)) !== null) {
      let result = wordB.replace(basic, woot, `$2`);
      return result;
    }
  },
};
