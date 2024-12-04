// Store widget configurations in memory
const widgets = {
    "widget-1": {
      id: "widget-1",
      apiEndpoint: "https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=15",
      fieldMapping: (data) => data.products.map((product) => ({ name: product.name })),
      uiConfig: { color: "blue", size: "medium" }
    }
  };
  
  module.exports = widgets;
  