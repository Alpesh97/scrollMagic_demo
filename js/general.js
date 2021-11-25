/* ---- First-step ---- */

/*init controller...

->It is telling the browser to used scrollbar and trigger the animation.
->controller has one or more scenes attached to it.
->Each scene is used to define what happens when the container is scrolled to a specific offset.*/

var controller = new ScrollMagic.Controller({
	addIndicators: true, // aa option ni madad thi aa controller ma jetla bhi scene hase e bdha ma indicators add thay jase...aapde bdha scene ma personally add ny karva pde

	globalSceneOptions:
	    {
	        triggerHook: 'onLeave'
	    }
});

/* ---- Second-step ---- */

/*Build a scene...
->What is animation is defined in scene*/

new ScrollMagic.Scene({
	triggerElement: '#pinned-trigger1', // jyathi animation start karvu che e point
    duration: 400, // starting point pasi 400px na scroll sudhi animation rese pasi end aavi jase animation no...means htu evu thay jse
    offset: 50 // starting point e pohsya pasi 50px na scroll pasi animation start thse.
})
.setPin("#my-sticky-element") // 
.addTo(controller) // assign the scene to the controller...we can also asign multiple scene to the one controller at a time.
/* ex:-
	var scene1 = new ScrollMagic.Scene({option});
	var scene2 = new ScrollMagic.Scene({option});
	var scene3 = new ScrollMagic.Scene({option});

	->To add all this scene into container:-

		controller.addScene([
		  scene1,
		  scene2,
		  scene3
		]);
 */
 .addIndicators({ 
 	/*
 	->jo koi particular scene ma indicator add karvu hoy to aa rite karvu baki bdha scene ma indicator jotu hoy to controller creare kriye ena option ma add kri devu.
 	->It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
	->To have access to this extension, please include plugins/debug.addIndicators.js.
	->There are some options avilable for this, which are :-*/
	name:'any string', //->start and end point sathe aa name display thse...default number display hase.
	indent: 200, //-> right side thi 200px no offset muki ne show thse
	colorStart:'any color', //->start point no color define kre
	colorEnd: 'any color',	//->end point no color define kre
	colorTrigger :'any color' //-> trigger indicator no color define kre
 })
//-> remove previously added indicators
.removeIndicators()


