import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, e as element, a as claim_element, b as children, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as get_slot_context, l as get_slot_changes, t as transition_in, m as transition_out, n as space, o as text, p as create_component, q as query_selector_all, r as claim_space, u as claim_text, w as claim_component, x as append_dev, y as mount_component, z as destroy_component } from './client.d6cc0454.js';
import { G as GradientHeading } from './GradientHeading.3e2978ed.js';

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

// (258:2) <GradientHeading depth={2}>
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
			br = claim_element(nodes, "BR", {});
			t1 = claim_text(nodes, "\r\n    work");
			this.h();
		},
		h: function hydrate() {
			add_location(br, file$1, 259, 4, 4825);
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
		source: "(258:2) <GradientHeading depth={2}>",
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
			img0 = claim_element(a_nodes, "IMG", { src: true, alt: true });
			t1 = claim_space(a_nodes);
			aside = claim_element(a_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			h10 = claim_element(aside_nodes, "H1", {});
			var h10_nodes = children(h10);
			t2 = claim_text(h10_nodes, "Mohammed Mulazada");
			h10_nodes.forEach(detach_dev);
			t3 = claim_space(aside_nodes);
			h2 = claim_element(aside_nodes, "H2", {});
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
			br = claim_element(h11_nodes, "BR", {});
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
			img1 = claim_element(figure1_nodes, "IMG", { alt: true, src: true });
			figure1_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);
			figure2 = claim_element(div1_nodes, "FIGURE", { class: true });
			var figure2_nodes = children(figure2);
			img2 = claim_element(figure2_nodes, "IMG", { alt: true, src: true });
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
			add_location(img0, file$1, 219, 4, 3660);
			add_location(h10, file$1, 221, 6, 3753);
			add_location(h2, file$1, 222, 6, 3787);
			attr_dev(aside, "class", "text-white pl-4");
			add_location(aside, file$1, 220, 4, 3714);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "logo_container px-10 mt-10 svelte-1930h73");
			add_location(a, file$1, 218, 2, 3607);
			attr_dev(span, "class", "font-bold text-6xl");
			add_location(span, file$1, 229, 8, 3969);
			add_location(br, file$1, 230, 8, 4026);
			attr_dev(h11, "class", "text-4xl leading-none mb-4");
			add_location(h11, file$1, 228, 6, 3920);
			attr_dev(p, "class", "max-w-lg");
			add_location(p, file$1, 233, 6, 4078);
			attr_dev(div0, "class", "px-10 intro text-white svelte-1930h73");
			add_location(div0, file$1, 227, 4, 3876);
			attr_dev(figure0, "class", "square svelte-1930h73");
			add_location(figure0, file$1, 241, 6, 4365);
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "./triangle.svg")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file$1, 243, 8, 4433);
			attr_dev(figure1, "class", "triangle svelte-1930h73");
			add_location(figure1, file$1, 242, 6, 4398);
			attr_dev(img2, "alt", "");
			if (img2.src !== (img2_src_value = "./polygon.svg")) attr_dev(img2, "src", img2_src_value);
			add_location(img2, file$1, 246, 8, 4527);
			attr_dev(figure2, "class", "polygon svelte-1930h73");
			add_location(figure2, file$1, 245, 6, 4493);
			attr_dev(div1, "class", "figure-holder svelte-1930h73");
			add_location(div1, file$1, 240, 4, 4330);
			attr_dev(div2, "class", "header-holder svelte-1930h73");
			add_location(div2, file$1, 226, 2, 3843);
			attr_dev(img3, "class", "wave1 svelte-1930h73");
			attr_dev(img3, "alt", "");
			if (img3.src !== (img3_src_value = "wave1.svg")) attr_dev(img3, "src", img3_src_value);
			add_location(img3, file$1, 251, 4, 4632);
			attr_dev(img4, "class", "wave2 svelte-1930h73");
			attr_dev(img4, "alt", "");
			if (img4.src !== (img4_src_value = "wave2.svg")) attr_dev(img4, "src", img4_src_value);
			add_location(img4, file$1, 252, 4, 4682);
			attr_dev(figure3, "class", "waves svelte-1930h73");
			add_location(figure3, file$1, 250, 2, 4604);
			attr_dev(header, "class", "h-full svelte-1930h73");
			add_location(header, file$1, 217, 0, 3580);
			attr_dev(main, "class", "px-10 py-16 svelte-1930h73");
			add_location(main, file$1, 256, 0, 4754);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2QzNjAyOWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGV4cG9ydCBsZXQgZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgZXhwb3J0IGxldCBqdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5Sb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPGRpdlxyXG4gIGNsYXNzPVwiUm93XCJcclxuICBzdHlsZT17YGZsZXgtZGlyZWN0aW9uOiAke2ZsZXhEaXJlY3Rpb259OyBqdXN0aWZ5LWNvbnRlbnQ6ICR7anVzdGlmeUNvbnRlbnR9YH0+XHJcbiAgPHNsb3QgLz5cclxuPC9kaXY+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3cuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IEdyYWRpZW50SGVhZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlXCI7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjMDEwMjIwIDAlLCAjMDAwMDAwIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLndhdmUxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiB3YXZlIDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC53YXZlMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0yMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFuaW1hdGlvbjogd2F2ZSAycyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZSwgaHVlIDVzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLndhdmUxLFxyXG4gIC53YXZlMiB7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxuICB9XHJcblxyXG4gIC5pbnRybyB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwJTsgKi9cclxuICB9XHJcblxyXG4gIC5maWd1cmUtaG9sZGVyIHtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMCU7XHJcbiAgICB0b3A6IDMwJTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG5cclxuICAuZmlndXJlLWhvbGRlciA+ICoge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuc3F1YXJlIHtcclxuICAgIGhlaWdodDogODJweDtcclxuICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudHJpYW5nbGUge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYW5pbWF0aW9uOiBob3ZlciA0cyBlYXNlIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICAucG9seWdvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSA1cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODAlO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLndhdmVzIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ29fY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgOmdsb2JhbCgubG9nb19jb250YWluZXIgPiBpbWcpIHtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4MCUsIDAlIDEwMCUpO1xyXG4gICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWhvbGRlciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZ3VyZS1ob2xkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTByZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRybyB7XHJcbiAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC53YXZlMSB7XHJcbiAgICAgIGJvdHRvbTogLTIwJTtcclxuICAgIH1cclxuXHJcbiAgICAud2F2ZTIge1xyXG4gICAgICBib3R0b206IC0xNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KSB7XHJcbiAgICAud2F2ZTEge1xyXG4gICAgICBib3R0b206IC00NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLndhdmUyIHtcclxuICAgICAgYm90dG9tOiAtMzUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBob3ZlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZVN0ZXAge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgaHVlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoLTM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHdhdmUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgICAud2F2ZTEsXHJcbiAgICAud2F2ZTIsXHJcbiAgICAuc3F1YXJlIHtcclxuICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuICA8dGl0bGU+SG9tZSB8IFBvcnRmb2xpbyBvZiBNb2hhbW1lZCBNdWxhemFkYTwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48aGVhZGVyIGNsYXNzPVwiaC1mdWxsXCI+XHJcbiAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImxvZ29fY29udGFpbmVyIHB4LTEwIG10LTEwXCI+XHJcbiAgICA8aW1nIHNyYz1cIm1vX2xvZ28uc3ZnXCIgYWx0PVwibG9nbyBmcm9tIG1vbmlhY1wiIC8+XHJcbiAgICA8YXNpZGUgY2xhc3M9XCJ0ZXh0LXdoaXRlIHBsLTRcIj5cclxuICAgICAgPGgxPk1vaGFtbWVkIE11bGF6YWRhPC9oMT5cclxuICAgICAgPGgyPkZyb250LWVuZCBEZXZlbG9wZXI8L2gyPlxyXG4gICAgPC9hc2lkZT5cclxuICA8L2E+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItaG9sZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHgtMTAgaW50cm8gdGV4dC13aGl0ZVwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBsZWFkaW5nLW5vbmUgbWItNFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtNnhsXCI+V2VsY29tZTwvc3Bhbj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB0byBteSBwb3J0Zm9saW9cclxuICAgICAgPC9oMT5cclxuICAgICAgPHAgY2xhc3M9XCJtYXgtdy1sZ1wiPlxyXG4gICAgICAgIEkgYW0gTW9oYW1tZWQgTXVsYXphZGEsIGEgRnJvbnQtRW5kIERldmVsb3BlciBiYXNlZCBpbiBBbXN0ZXJkYW0uIFdpdGggYVxyXG4gICAgICAgIHBhc3Npb24gZm9yIGFsbCB0aGluZ3Mgd2ViLCBJIGFtIGxvb2tpbmcgZm9yIGNoYWxsZW5nZXMgYW5kIG5ldyB0aGluZ3NcclxuICAgICAgICB0byBsZWFybiBlYWNoIGFuZCBldmVyeSBkYXkuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWd1cmUtaG9sZGVyXCI+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3M9XCJzcXVhcmVcIiAvPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzPVwidHJpYW5nbGVcIj5cclxuICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi4vdHJpYW5nbGUuc3ZnXCIgLz5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3M9XCJwb2x5Z29uXCI+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIuL3BvbHlnb24uc3ZnXCIgLz5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZmlndXJlIGNsYXNzPVwid2F2ZXNcIj5cclxuICAgIDxpbWcgY2xhc3M9XCJ3YXZlMVwiIGFsdD1cIlwiIHNyYz1cIndhdmUxLnN2Z1wiIC8+XHJcbiAgICA8aW1nIGNsYXNzPVwid2F2ZTJcIiBhbHQ9XCJcIiBzcmM9XCJ3YXZlMi5zdmdcIiAvPlxyXG4gIDwvZmlndXJlPlxyXG48L2hlYWRlcj5cclxuXHJcbjxtYWluIGNsYXNzPVwicHgtMTAgcHktMTZcIj5cclxuICA8R3JhZGllbnRIZWFkaW5nIGRlcHRoPXsyfT5cclxuICAgIE15XHJcbiAgICA8YnIgLz5cclxuICAgIHdvcmtcclxuICA8L0dyYWRpZW50SGVhZGluZz5cclxuXHJcbjwvbWFpbj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lGQWM0QixHQUFhLDRDQUFzQixHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhJQUFqRCxHQUFhLDRDQUFzQixHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BYmhFLGFBQWEsR0FBRyxLQUFLO09BQ3JCLGNBQWMsR0FBRyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dDK1BsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
