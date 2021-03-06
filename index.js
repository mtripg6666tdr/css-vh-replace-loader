module.exports = function (content, map, meta) {
  return content
    .replace(/(?<pre>[^;\s\n}])(?<aft>[\s\n]*})/g, "$<pre>;$<aft>")
    .replace(/{.+?}/sg, container => {
      const props = container.substr(1).slice(0, -1);
      return "{" + props.replace(/[^;:{}]+?:[^;:{}]+?;/sg, prop => {
        if(prop.indexOf("vh") < 0){
          return prop;
        }else{
          return prop + prop.replace(/-?[\d\.]+vh/g, part => {
            return "calc(var(--vh,1vh)*" + part.match(/(-?[\d\.]+)/)[1] + ")";
          })
        }
      }) + "}";
    })
    .replace(/;}/g, "}");
}