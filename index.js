module.exports = function (content, map, meta) {
  return content.replace(/{.+}/sg, container => {
    const props = container.substr(1).slice(0, -1);
    return "{" + props.replace(/\s*[a-zA-Z0-9\-]+\s*:\s*[a-zA-Z0-9\-\(\)\s%]+\s*;/g, prop => {
      if(prop.indexOf("vh") < 0){
        return prop;
      }else{
        return prop + prop.replace(/\d+vh/g, part => {
          return "calc(var(--vh, 1vh) * " + part.match(/(\d+)/)[1] + ")";
        })
      }
    }) + "}";
  })
}