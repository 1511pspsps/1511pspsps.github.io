// 主要是百度地图的js
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapOverlay();//向地图添加覆盖物
  }
  function createMap(){ 
    map = new BMap.Map("map"); 
    map.centerAndZoom(new BMap.Point(113.354288,23.156428),16);
  }
  function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
  }
  function addClickHandler(target,window){
    target.addEventListener("click",function(){
      target.openInfoWindow(window);
    });
  }
  function addMapOverlay(){
  }
  //向地图添加控件
  function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:1});
    map.addControl(navControl);
  }
  var map;
    initMap();