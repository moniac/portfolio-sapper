import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, e as element, a as claim_element, b as children, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as get_slot_context, l as get_slot_changes, t as transition_in, m as transition_out, n as space, o as text, p as create_component, q as query_selector_all, r as claim_space, u as claim_text, w as claim_component, x as append_dev, y as mount_component, z as destroy_component } from './client.a09b1ab7.js';
import { G as GradientHeading } from './GradientHeading.4441c847.js';

/* src\components\Row.svelte generated by Svelte v3.21.0 */

const file = "src\\components\\Row.svelte";

function create_fragment(ctx) {
	let div;
	let div_style_value;
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "Row svelte-15qlxh0");
			attr_dev(div, "style", div_style_value = `flex-direction: ${/*flexDirection*/ ctx[0]}; justify-content: ${/*justifyContent*/ ctx[1]}`);
			add_location(div, file, 12, 0, 189);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
				}
			}

			if (!current || dirty & /*flexDirection, justifyContent*/ 3 && div_style_value !== (div_style_value = `flex-direction: ${/*flexDirection*/ ctx[0]}; justify-content: ${/*justifyContent*/ ctx[1]}`)) {
				attr_dev(div, "style", div_style_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { flexDirection = "row" } = $$props;
	let { justifyContent = "space-around" } = $$props;
	const writable_props = ["flexDirection", "justifyContent"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Row> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Row", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("flexDirection" in $$props) $$invalidate(0, flexDirection = $$props.flexDirection);
		if ("justifyContent" in $$props) $$invalidate(1, justifyContent = $$props.justifyContent);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ flexDirection, justifyContent });

	$$self.$inject_state = $$props => {
		if ("flexDirection" in $$props) $$invalidate(0, flexDirection = $$props.flexDirection);
		if ("justifyContent" in $$props) $$invalidate(1, justifyContent = $$props.justifyContent);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [flexDirection, justifyContent, $$scope, $$slots];
}

class Row extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { flexDirection: 0, justifyContent: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Row",
			options,
			id: create_fragment.name
		});
	}

	get flexDirection() {
		throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set flexDirection(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get justifyContent() {
		throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set justifyContent(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\index.svelte generated by Svelte v3.21.0 */
const file$1 = "src\\routes\\index.svelte";

// (254:2) <GradientHeading depth={2}>
function create_default_slot(ctx) {
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			t0 = text("My\r\n    ");
			br = element("br");
			t1 = text("\r\n    work");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "My\r\n    ");
			br = claim_element(nodes, "BR", { class: true });
			t1 = claim_text(nodes, "\r\n    work");
			this.h();
		},
		h: function hydrate() {
			attr_dev(br, "class", "svelte-1g807eh");
			add_location(br, file$1, 255, 4, 4751);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, t1, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(254:2) <GradientHeading depth={2}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let header;
	let a;
	let img0;
	let img0_src_value;
	let t1;
	let aside;
	let h10;
	let t2;
	let t3;
	let h2;
	let t4;
	let t5;
	let div2;
	let div0;
	let h11;
	let span;
	let t6;
	let t7;
	let br;
	let t8;
	let t9;
	let p;
	let t10;
	let t11;
	let div1;
	let figure0;
	let t12;
	let figure1;
	let img1;
	let img1_src_value;
	let t13;
	let figure2;
	let img2;
	let img2_src_value;
	let t14;
	let figure3;
	let img3;
	let img3_src_value;
	let t15;
	let img4;
	let img4_src_value;
	let t16;
	let main;
	let current;

	const gradientheading = new GradientHeading({
			props: {
				depth: 2,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			header = element("header");
			a = element("a");
			img0 = element("img");
			t1 = space();
			aside = element("aside");
			h10 = element("h1");
			t2 = text("Mohammed Mulazada");
			t3 = space();
			h2 = element("h2");
			t4 = text("Front-end Developer");
			t5 = space();
			div2 = element("div");
			div0 = element("div");
			h11 = element("h1");
			span = element("span");
			t6 = text("Welcome");
			t7 = space();
			br = element("br");
			t8 = text("\r\n        to my portfolio");
			t9 = space();
			p = element("p");
			t10 = text("I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\r\n        passion for all things web, I am looking for challenges and new things\r\n        to learn each and every day.");
			t11 = space();
			div1 = element("div");
			figure0 = element("figure");
			t12 = space();
			figure1 = element("figure");
			img1 = element("img");
			t13 = space();
			figure2 = element("figure");
			img2 = element("img");
			t14 = space();
			figure3 = element("figure");
			img3 = element("img");
			t15 = space();
			img4 = element("img");
			t16 = space();
			main = element("main");
			create_component(gradientheading.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-14qh2qm\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			a = claim_element(header_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			img0 = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
			t1 = claim_space(a_nodes);
			aside = claim_element(a_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			h10 = claim_element(aside_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t2 = claim_text(h10_nodes, "Mohammed Mulazada");
			h10_nodes.forEach(detach_dev);
			t3 = claim_space(aside_nodes);
			h2 = claim_element(aside_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "Front-end Developer");
			h2_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(header_nodes);
			div2 = claim_element(header_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h11 = claim_element(div0_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			span = claim_element(h11_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t6 = claim_text(span_nodes, "Welcome");
			span_nodes.forEach(detach_dev);
			t7 = claim_space(h11_nodes);
			br = claim_element(h11_nodes, "BR", { class: true });
			t8 = claim_text(h11_nodes, "\r\n        to my portfolio");
			h11_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t10 = claim_text(p_nodes, "I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\r\n        passion for all things web, I am looking for challenges and new things\r\n        to learn each and every day.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure0 = claim_element(div1_nodes, "FIGURE", { class: true });
			children(figure0).forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			figure1 = claim_element(div1_nodes, "FIGURE", { class: true });
			var figure1_nodes = children(figure1);
			img1 = claim_element(figure1_nodes, "IMG", { alt: true, src: true, class: true });
			figure1_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);
			figure2 = claim_element(div1_nodes, "FIGURE", { class: true });
			var figure2_nodes = children(figure2);
			img2 = claim_element(figure2_nodes, "IMG", { alt: true, src: true, class: true });
			figure2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t14 = claim_space(header_nodes);
			figure3 = claim_element(header_nodes, "FIGURE", { class: true });
			var figure3_nodes = children(figure3);
			img3 = claim_element(figure3_nodes, "IMG", { class: true, alt: true, src: true });
			t15 = claim_space(figure3_nodes);
			img4 = claim_element(figure3_nodes, "IMG", { class: true, alt: true, src: true });
			figure3_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(gradientheading.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Home | Portfolio of Mohammed Mulazada";
			if (img0.src !== (img0_src_value = "mo_logo.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "logo from moniac");
			attr_dev(img0, "class", "svelte-1g807eh");
			add_location(img0, file$1, 215, 4, 3586);
			attr_dev(h10, "class", "svelte-1g807eh");
			add_location(h10, file$1, 217, 6, 3679);
			attr_dev(h2, "class", "svelte-1g807eh");
			add_location(h2, file$1, 218, 6, 3713);
			attr_dev(aside, "class", "text-white pl-4 svelte-1g807eh");
			add_location(aside, file$1, 216, 4, 3640);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "logo_container px-10 mt-10 svelte-1g807eh");
			add_location(a, file$1, 214, 2, 3533);
			attr_dev(span, "class", "font-bold text-6xl svelte-1g807eh");
			add_location(span, file$1, 225, 8, 3895);
			attr_dev(br, "class", "svelte-1g807eh");
			add_location(br, file$1, 226, 8, 3952);
			attr_dev(h11, "class", "text-4xl leading-none mb-4 svelte-1g807eh");
			add_location(h11, file$1, 224, 6, 3846);
			attr_dev(p, "class", "max-w-lg svelte-1g807eh");
			add_location(p, file$1, 229, 6, 4004);
			attr_dev(div0, "class", "px-10 intro text-white svelte-1g807eh");
			add_location(div0, file$1, 223, 4, 3802);
			attr_dev(figure0, "class", "square svelte-1g807eh");
			add_location(figure0, file$1, 237, 6, 4291);
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "./triangle.svg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "class", "svelte-1g807eh");
			add_location(img1, file$1, 239, 8, 4359);
			attr_dev(figure1, "class", "triangle svelte-1g807eh");
			add_location(figure1, file$1, 238, 6, 4324);
			attr_dev(img2, "alt", "");
			if (img2.src !== (img2_src_value = "./polygon.svg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "class", "svelte-1g807eh");
			add_location(img2, file$1, 242, 8, 4453);
			attr_dev(figure2, "class", "polygon svelte-1g807eh");
			add_location(figure2, file$1, 241, 6, 4419);
			attr_dev(div1, "class", "figure-holder svelte-1g807eh");
			add_location(div1, file$1, 236, 4, 4256);
			attr_dev(div2, "class", "header-holder svelte-1g807eh");
			add_location(div2, file$1, 222, 2, 3769);
			attr_dev(img3, "class", "wave1 svelte-1g807eh");
			attr_dev(img3, "alt", "");
			if (img3.src !== (img3_src_value = "wave1.svg")) attr_dev(img3, "src", img3_src_value);
			add_location(img3, file$1, 247, 4, 4558);
			attr_dev(img4, "class", "wave2 svelte-1g807eh");
			attr_dev(img4, "alt", "");
			if (img4.src !== (img4_src_value = "wave2.svg")) attr_dev(img4, "src", img4_src_value);
			add_location(img4, file$1, 248, 4, 4608);
			attr_dev(figure3, "class", "waves svelte-1g807eh");
			add_location(figure3, file$1, 246, 2, 4530);
			attr_dev(header, "class", "h-full svelte-1g807eh");
			add_location(header, file$1, 213, 0, 3506);
			attr_dev(main, "class", "px-10 py-16 svelte-1g807eh");
			add_location(main, file$1, 252, 0, 4680);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, a);
			append_dev(a, img0);
			append_dev(a, t1);
			append_dev(a, aside);
			append_dev(aside, h10);
			append_dev(h10, t2);
			append_dev(aside, t3);
			append_dev(aside, h2);
			append_dev(h2, t4);
			append_dev(header, t5);
			append_dev(header, div2);
			append_dev(div2, div0);
			append_dev(div0, h11);
			append_dev(h11, span);
			append_dev(span, t6);
			append_dev(h11, t7);
			append_dev(h11, br);
			append_dev(h11, t8);
			append_dev(div0, t9);
			append_dev(div0, p);
			append_dev(p, t10);
			append_dev(div2, t11);
			append_dev(div2, div1);
			append_dev(div1, figure0);
			append_dev(div1, t12);
			append_dev(div1, figure1);
			append_dev(figure1, img1);
			append_dev(div1, t13);
			append_dev(div1, figure2);
			append_dev(figure2, img2);
			append_dev(header, t14);
			append_dev(header, figure3);
			append_dev(figure3, img3);
			append_dev(figure3, t15);
			append_dev(figure3, img4);
			insert_dev(target, t16, anchor);
			insert_dev(target, main, anchor);
			mount_component(gradientheading, main, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const gradientheading_changes = {};

			if (dirty & /*$$scope*/ 1) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(gradientheading.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(gradientheading.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(header);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(main);
			destroy_component(gradientheading);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Row, GradientHeading });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjdkNmRkMjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGV4cG9ydCBsZXQgZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgZXhwb3J0IGxldCBqdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5Sb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPGRpdlxyXG4gIGNsYXNzPVwiUm93XCJcclxuICBzdHlsZT17YGZsZXgtZGlyZWN0aW9uOiAke2ZsZXhEaXJlY3Rpb259OyBqdXN0aWZ5LWNvbnRlbnQ6ICR7anVzdGlmeUNvbnRlbnR9YH0+XHJcbiAgPHNsb3QgLz5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3cuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IEdyYWRpZW50SGVhZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlXCI7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjMDEwMjIwIDAlLCAjMDAwMDAwIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLndhdmUxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiB3YXZlIDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIH1cclxuXHJcbiAgLndhdmUyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiB3YXZlIDJzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlLCBodWUgNXMgZWFzZSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcblxyXG4gIC53YXZlMSxcclxuICAud2F2ZTIge1xyXG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW50cm8ge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMCU7ICovXHJcbiAgfVxyXG5cclxuICAuZmlndXJlLWhvbGRlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzAlO1xyXG4gICAgdG9wOiAzMCU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuZmlndXJlLWhvbGRlciA+ICogKyAqIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnNxdWFyZSB7XHJcbiAgICBoZWlnaHQ6IDgycHg7XHJcbiAgICB3aWR0aDogODJweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgfVxyXG5cclxuICAudHJpYW5nbGUge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYW5pbWF0aW9uOiBob3ZlciA0cyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICAucG9seWdvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSA1cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODAlO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLndhdmVzIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ29fY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgOmdsb2JhbCgubG9nb19jb250YWluZXIgPiBpbWcpIHtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4MCUsIDAlIDEwMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItaG9sZGVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuZmlndXJlLWhvbGRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmludHJvIHtcclxuICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLndhdmUxIHtcclxuICAgICAgYm90dG9tOiAtMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC53YXZlMiB7XHJcbiAgICAgIGJvdHRvbTogLTE1JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcclxuICAgIC53YXZlMSB7XHJcbiAgICAgIGJvdHRvbTogLTQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAud2F2ZTIge1xyXG4gICAgICBib3R0b206IC0zNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGhvdmVyIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcm90YXRlU3RlcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA0MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBodWUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgtMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgd2F2ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAgIC53YXZlMSxcclxuICAgIC53YXZlMixcclxuICAgIC5zcXVhcmUge1xyXG4gICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gIDx0aXRsZT5Ib21lIHwgUG9ydGZvbGlvIG9mIE1vaGFtbWVkIE11bGF6YWRhPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxoZWFkZXIgY2xhc3M9XCJoLWZ1bGxcIj5cclxuICA8YSBocmVmPVwiL1wiIGNsYXNzPVwibG9nb19jb250YWluZXIgcHgtMTAgbXQtMTBcIj5cclxuICAgIDxpbWcgc3JjPVwibW9fbG9nby5zdmdcIiBhbHQ9XCJsb2dvIGZyb20gbW9uaWFjXCIgLz5cclxuICAgIDxhc2lkZSBjbGFzcz1cInRleHQtd2hpdGUgcGwtNFwiPlxyXG4gICAgICA8aDE+TW9oYW1tZWQgTXVsYXphZGE8L2gxPlxyXG4gICAgICA8aDI+RnJvbnQtZW5kIERldmVsb3BlcjwvaDI+XHJcbiAgICA8L2FzaWRlPlxyXG4gIDwvYT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlci1ob2xkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJweC0xMCBpbnRybyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIGxlYWRpbmctbm9uZSBtYi00XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC02eGxcIj5XZWxjb21lPC9zcGFuPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHRvIG15IHBvcnRmb2xpb1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzcz1cIm1heC13LWxnXCI+XHJcbiAgICAgICAgSSBhbSBNb2hhbW1lZCBNdWxhemFkYSwgYSBGcm9udC1FbmQgRGV2ZWxvcGVyIGJhc2VkIGluIEFtc3RlcmRhbS4gV2l0aCBhXHJcbiAgICAgICAgcGFzc2lvbiBmb3IgYWxsIHRoaW5ncyB3ZWIsIEkgYW0gbG9va2luZyBmb3IgY2hhbGxlbmdlcyBhbmQgbmV3IHRoaW5nc1xyXG4gICAgICAgIHRvIGxlYXJuIGVhY2ggYW5kIGV2ZXJ5IGRheS5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZpZ3VyZS1ob2xkZXJcIj5cclxuICAgICAgPGZpZ3VyZSBjbGFzcz1cInNxdWFyZVwiIC8+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3M9XCJ0cmlhbmdsZVwiPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiLi90cmlhbmdsZS5zdmdcIiAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPGZpZ3VyZSBjbGFzcz1cInBvbHlnb25cIj5cclxuICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi4vcG9seWdvbi5zdmdcIiAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxmaWd1cmUgY2xhc3M9XCJ3YXZlc1wiPlxyXG4gICAgPGltZyBjbGFzcz1cIndhdmUxXCIgYWx0PVwiXCIgc3JjPVwid2F2ZTEuc3ZnXCIgLz5cclxuICAgIDxpbWcgY2xhc3M9XCJ3YXZlMlwiIGFsdD1cIlwiIHNyYz1cIndhdmUyLnN2Z1wiIC8+XHJcbiAgPC9maWd1cmU+XHJcbjwvaGVhZGVyPlxyXG5cclxuPG1haW4gY2xhc3M9XCJweC0xMCBweS0xNlwiPlxyXG4gIDxHcmFkaWVudEhlYWRpbmcgZGVwdGg9ezJ9PlxyXG4gICAgTXlcclxuICAgIDxiciAvPlxyXG4gICAgd29ya1xyXG4gIDwvR3JhZGllbnRIZWFkaW5nPlxyXG5cclxuPC9tYWluPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBYzRCLEdBQWEsNENBQXNCLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OElBQWpELEdBQWEsNENBQXNCLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FiaEUsYUFBYSxHQUFHLEtBQUs7T0FDckIsY0FBYyxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dDMlBsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
