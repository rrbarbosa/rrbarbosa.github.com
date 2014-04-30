// Created by iWeb 3.0.4 local-build-20140430

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,351),url:'SCADA_Movie_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'SCADA_Movie_files/stroke_1.png'},{rect:new IWRect(2,-2,421,4),url:'SCADA_Movie_files/stroke_2.png'},{rect:new IWRect(423,-2,4,4),url:'SCADA_Movie_files/stroke_3.png'},{rect:new IWRect(423,2,4,351),url:'SCADA_Movie_files/stroke_4.png'},{rect:new IWRect(423,353,4,4),url:'SCADA_Movie_files/stroke_5.png'},{rect:new IWRect(2,353,421,4),url:'SCADA_Movie_files/stroke_6.png'},{rect:new IWRect(-2,353,4,4),url:'SCADA_Movie_files/stroke_7.png'}],new IWSize(425,355))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('SCADA_Movie_files/SCADA_MovieMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
