function showHeroTextStaggered(){var e=Array.from(document.getElementsByClassName("hero-text")[0].children);e.forEach(function(e,o){var l=1100*(o+1);setTimeout(function(){e.className="show"},l)})}function changeFloatingLineColor(){Array.from(document.getElementsByClassName("floating-line")[0].children)}WebFont.load({google:{families:["Fauna One"]}}),showHeroTextStaggered();var controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"},addIndicators:!0}),bodyElement=document.getElementsByTagName("body")[0],workExampleElements=document.getElementsByClassName("single-work-example");new ScrollMagic.Scene({triggerElement:bodyElement,offset:500}).setClassToggle(".hero-text","hide").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:700,duration:500}).setClassToggle(".work-introduction","show").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:1500,duration:500}).setClassToggle(workExampleElements[0],"show").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:2300,duration:500}).setClassToggle(workExampleElements[1],"show").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:3100,duration:500}).setClassToggle(workExampleElements[2],"show").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:3900,duration:500}).setClassToggle(workExampleElements[3],"show").addTo(controller),new ScrollMagic.Scene({triggerElement:bodyElement,offset:4700}).setClassToggle(".links-and-contact","show").addTo(controller);