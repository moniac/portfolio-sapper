import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as create_slot, e as element, c as claim_element, b as children, g as detach_dev, j as attr_dev, l as add_location, o as insert_dev, y as get_slot_context, z as get_slot_changes, A as transition_in, B as transition_out, a as space, t as text, v as create_component, h as claim_space, f as claim_text, w as claim_component, p as append_dev, x as mount_component, C as destroy_component } from './index.07b4eea1.js';

/* src/components/Row.svelte generated by Svelte v3.16.0 */

const file = "src/components/Row.svelte";

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
			attr_dev(div, "class", "Row svelte-1rziq6j");
			attr_dev(div, "style", div_style_value = `flex-direction: ${/*flexDirection*/ ctx[0]}; justify-content: ${/*justifyContent*/ ctx[1]}`);
			add_location(div, file, 12, 0, 177);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
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

	$$self.$set = $$props => {
		if ("flexDirection" in $$props) $$invalidate(0, flexDirection = $$props.flexDirection);
		if ("justifyContent" in $$props) $$invalidate(1, justifyContent = $$props.justifyContent);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { flexDirection, justifyContent };
	};

	$$self.$inject_state = $$props => {
		if ("flexDirection" in $$props) $$invalidate(0, flexDirection = $$props.flexDirection);
		if ("justifyContent" in $$props) $$invalidate(1, justifyContent = $$props.justifyContent);
	};

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

/* src/routes/index.svelte generated by Svelte v3.16.0 */
const file$1 = "src/routes/index.svelte";

// (90:2) <Row flexDirection="column">
function create_default_slot(ctx) {
	let picture;
	let source;
	let t0;
	let img0;
	let img0_style_value;
	let img0_src_value;
	let t1;
	let img1;
	let img1_src_value;

	const block = {
		c: function create() {
			picture = element("picture");
			source = element("source");
			t0 = space();
			img0 = element("img");
			t1 = space();
			img1 = element("img");
			this.h();
		},
		l: function claim(nodes) {
			picture = claim_element(nodes, "PICTURE", { class: true });
			var picture_nodes = children(picture);
			source = claim_element(picture_nodes, "SOURCE", { srcset: true, type: true });
			t0 = claim_space(picture_nodes);
			img0 = claim_element(picture_nodes, "IMG", { alt: true, style: true, src: true });
			picture_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			img1 = claim_element(nodes, "IMG", { class: true, alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(source, "srcset", "g/mo-366.webp");
			attr_dev(source, "type", "image/webp");
			add_location(source, file$1, 91, 6, 1681);
			attr_dev(img0, "alt", "Image of Mohammed Mulazada");
			attr_dev(img0, "style", img0_style_value = `max-width:400px`);
			if (img0.src !== (img0_src_value = "g/mo.png")) attr_dev(img0, "src", img0_src_value);
			add_location(img0, file$1, 92, 6, 1739);
			attr_dev(picture, "class", "avatar svelte-g37wvf");
			add_location(picture, file$1, 90, 4, 1650);
			attr_dev(img1, "class", "shadow svelte-g37wvf");
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "shadow.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file$1, 97, 4, 1864);
		},
		m: function mount(target, anchor) {
			insert_dev(target, picture, anchor);
			append_dev(picture, source);
			append_dev(picture, t0);
			append_dev(picture, img0);
			insert_dev(target, t1, anchor);
			insert_dev(target, img1, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(picture);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(img1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(90:2) <Row flexDirection=\\\"column\\\">",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let div1;
	let div0;
	let p0;
	let t1;
	let t2;
	let h1;
	let t3;
	let br0;
	let t4;
	let t5;
	let p1;
	let t6;
	let br1;
	let t7;
	let t8;
	let t9;
	let main;
	let section;
	let ul;
	let current;

	const row = new Row({
			props: {
				flexDirection: "column",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			p0 = element("p");
			t1 = text("Front-End");
			t2 = space();
			h1 = element("h1");
			t3 = text("Dev-\n      ");
			br0 = element("br");
			t4 = text("\n      eloper");
			t5 = space();
			p1 = element("p");
			t6 = text("Welcome to my portfolio. My name is Mohammed, but please call me Mo.\n      ");
			br1 = element("br");
			t7 = text("\n      This site is still a work in progress...");
			t8 = space();
			create_component(row.$$.fragment);
			t9 = space();
			main = element("main");
			section = element("section");
			ul = element("ul");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Front-End");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "Dev-\n      ");
			br0 = claim_element(h1_nodes, "BR", {});
			t4 = claim_text(h1_nodes, "\n      eloper");
			h1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Welcome to my portfolio. My name is Mohammed, but please call me Mo.\n      ");
			br1 = claim_element(p1_nodes, "BR", {});
			t7 = claim_text(p1_nodes, "\n      This site is still a work in progress...");
			p1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			claim_component(row.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			section = claim_element(main_nodes, "SECTION", {});
			var section_nodes = children(section);
			ul = claim_element(section_nodes, "UL", {});
			var ul_nodes = children(ul);
			ul_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Home | Portfolio of Mohammed Mulazada";
			attr_dev(p0, "class", "role svelte-g37wvf");
			add_location(p0, file$1, 75, 4, 1366);
			add_location(br0, file$1, 78, 6, 1422);
			attr_dev(h1, "class", "svelte-g37wvf");
			add_location(h1, file$1, 76, 4, 1400);
			add_location(br1, file$1, 84, 6, 1542);
			add_location(p1, file$1, 82, 4, 1457);
			add_location(div0, file$1, 74, 2, 1356);
			attr_dev(div1, "class", "flex flex-col-reverse items-center px-6 justify-center lg:flex-row\n  flex-row justify-between flex-wrap");
			add_location(div1, file$1, 71, 0, 1234);
			add_location(ul, file$1, 103, 4, 1953);
			add_location(section, file$1, 102, 2, 1939);
			add_location(main, file$1, 101, 0, 1930);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, t1);
			append_dev(div0, t2);
			append_dev(div0, h1);
			append_dev(h1, t3);
			append_dev(h1, br0);
			append_dev(h1, t4);
			append_dev(div0, t5);
			append_dev(div0, p1);
			append_dev(p1, t6);
			append_dev(p1, br1);
			append_dev(p1, t7);
			append_dev(div1, t8);
			mount_component(row, div1, null);
			insert_dev(target, t9, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, section);
			append_dev(section, ul);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const row_changes = {};

			if (dirty & /*$$scope*/ 1) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_component(row);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(main);
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTllNmZmYmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICBleHBvcnQgbGV0IGp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5Sb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdlxuICBjbGFzcz1cIlJvd1wiXG4gIHN0eWxlPXtgZmxleC1kaXJlY3Rpb246ICR7ZmxleERpcmVjdGlvbn07IGp1c3RpZnktY29udGVudDogJHtqdXN0aWZ5Q29udGVudH1gfT5cbiAgPHNsb3QgLz5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3cuc3ZlbHRlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBoMSB7XG4gICAgZm9udC1zaXplOiA0LjhlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA5LjM3NWVtO1xuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNWI1Y2YxLCAjMjFiM2ZmKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiAwLjk7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAyMjVtcyBlYXNlO1xuICB9XG5cbiAgOmdsb2JhbCguZGFyay1tb2RlIGgxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YxNWI3NCwgI2ZmNjAyMSk7XG4gIH1cblxuICAucm9sZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICAuYXZhdGFyIHtcbiAgICBhbmltYXRpb246IGhvdmVyIDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG4gIH1cblxuICAuc2hhZG93IHtcbiAgICBhbmltYXRpb246IGhvdmVyU2hhZG93IDRzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgaG92ZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMiUpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgaG92ZXJTaGFkb3cge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5Ib21lIHwgUG9ydGZvbGlvIG9mIE1vaGFtbWVkIE11bGF6YWRhPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2XG4gIGNsYXNzPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IGp1c3RpZnktY2VudGVyIGxnOmZsZXgtcm93XG4gIGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXBcIj5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cInJvbGVcIj5Gcm9udC1FbmQ8L3A+XG4gICAgPGgxPlxuICAgICAgRGV2LVxuICAgICAgPGJyIC8+XG4gICAgICBlbG9wZXJcbiAgICA8L2gxPlxuXG4gICAgPHA+XG4gICAgICBXZWxjb21lIHRvIG15IHBvcnRmb2xpby4gTXkgbmFtZSBpcyBNb2hhbW1lZCwgYnV0IHBsZWFzZSBjYWxsIG1lIE1vLlxuICAgICAgPGJyIC8+XG4gICAgICBUaGlzIHNpdGUgaXMgc3RpbGwgYSB3b3JrIGluIHByb2dyZXNzLi4uXG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICA8Um93IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICA8cGljdHVyZSBjbGFzcz1cImF2YXRhclwiPlxuICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJnL21vLTM2Ni53ZWJwXCIgdHlwZT1cImltYWdlL3dlYnBcIiAvPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJJbWFnZSBvZiBNb2hhbW1lZCBNdWxhemFkYVwiXG4gICAgICAgIHN0eWxlPXtgbWF4LXdpZHRoOjQwMHB4YH1cbiAgICAgICAgc3JjPVwibW8ucG5nXCIgLz5cbiAgICA8L3BpY3R1cmU+XG4gICAgPGltZyBjbGFzcz1cInNoYWRvd1wiIGFsdD1cIlwiIHNyYz17J3NoYWRvdy5wbmcnfSAvPlxuICA8L1Jvdz5cbjwvZGl2PlxuXG48bWFpbj5cbiAgPHNlY3Rpb24+XG4gICAgPHVsPlxuICAgICAgPCEtLSA8bGk+dGVzdDwvbGk+IC0tPlxuICAgIDwvdWw+XG4gIDwvc2VjdGlvbj5cbjwvbWFpbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lGQWM0QixHQUFhLDRDQUFzQixHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs4SUFBakQsR0FBYSw0Q0FBc0IsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWJoRSxhQUFhLEdBQUcsS0FBSztPQUNyQixjQUFjLEdBQUcsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQytGUixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
