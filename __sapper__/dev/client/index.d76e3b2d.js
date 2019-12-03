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

// (89:2) <Row flexDirection="column">
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
			add_location(source, file$1, 90, 6, 1656);
			attr_dev(img0, "alt", "Image of Mohammed Mulazada");
			attr_dev(img0, "style", img0_style_value = `max-width:400px`);
			if (img0.src !== (img0_src_value = "g/mo.png")) attr_dev(img0, "src", img0_src_value);
			add_location(img0, file$1, 91, 6, 1714);
			attr_dev(picture, "class", "avatar svelte-169thcy");
			add_location(picture, file$1, 89, 4, 1625);
			attr_dev(img1, "class", "shadow svelte-169thcy");
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "shadow.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file$1, 96, 4, 1839);
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
		source: "(89:2) <Row flexDirection=\\\"column\\\">",
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
			attr_dev(p0, "class", "role svelte-169thcy");
			add_location(p0, file$1, 74, 4, 1341);
			add_location(br0, file$1, 77, 6, 1397);
			attr_dev(h1, "class", "svelte-169thcy");
			add_location(h1, file$1, 75, 4, 1375);
			add_location(br1, file$1, 83, 6, 1517);
			add_location(p1, file$1, 81, 4, 1432);
			add_location(div0, file$1, 73, 2, 1331);
			attr_dev(div1, "class", "flex flex-col-reverse items-center px-4 justify-center lg:flex-row\n  flex-row justify-between flex-wrap");
			add_location(div1, file$1, 70, 0, 1209);
			add_location(ul, file$1, 102, 4, 1928);
			add_location(section, file$1, 101, 2, 1914);
			add_location(main, file$1, 100, 0, 1905);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDc2ZTNiMmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICBleHBvcnQgbGV0IGp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5Sb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdlxuICBjbGFzcz1cIlJvd1wiXG4gIHN0eWxlPXtgZmxleC1kaXJlY3Rpb246ICR7ZmxleERpcmVjdGlvbn07IGp1c3RpZnktY29udGVudDogJHtqdXN0aWZ5Q29udGVudH1gfT5cbiAgPHNsb3QgLz5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3cuc3ZlbHRlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogOS4zNzVlbTtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzViNWNmMSwgIzIxYjNmZik7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsaW5lLWhlaWdodDogMC45O1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMjI1bXMgZWFzZTtcbiAgfVxuXG4gIDpnbG9iYWwoLmRhcmstbW9kZSBoMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMTViNzQsICNmZjYwMjEpO1xuICB9XG5cbiAgLnJvbGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmF2YXRhciB7XG4gICAgYW5pbWF0aW9uOiBob3ZlciA0cyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB9XG5cbiAgLnNoYWRvdyB7XG4gICAgYW5pbWF0aW9uOiBob3ZlclNoYWRvdyA0cyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhvdmVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIlKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhvdmVyU2hhZG93IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+SG9tZSB8IFBvcnRmb2xpbyBvZiBNb2hhbW1lZCBNdWxhemFkYTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdlxuICBjbGFzcz1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNCBqdXN0aWZ5LWNlbnRlciBsZzpmbGV4LXJvd1xuICBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwXCI+XG4gIDxkaXY+XG4gICAgPHAgY2xhc3M9XCJyb2xlXCI+RnJvbnQtRW5kPC9wPlxuICAgIDxoMT5cbiAgICAgIERldi1cbiAgICAgIDxiciAvPlxuICAgICAgZWxvcGVyXG4gICAgPC9oMT5cblxuICAgIDxwPlxuICAgICAgV2VsY29tZSB0byBteSBwb3J0Zm9saW8uIE15IG5hbWUgaXMgTW9oYW1tZWQsIGJ1dCBwbGVhc2UgY2FsbCBtZSBNby5cbiAgICAgIDxiciAvPlxuICAgICAgVGhpcyBzaXRlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4uLlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgPFJvdyBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgPHBpY3R1cmUgY2xhc3M9XCJhdmF0YXJcIj5cbiAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiZy9tby0zNjYud2VicFwiIHR5cGU9XCJpbWFnZS93ZWJwXCIgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiSW1hZ2Ugb2YgTW9oYW1tZWQgTXVsYXphZGFcIlxuICAgICAgICBzdHlsZT17YG1heC13aWR0aDo0MDBweGB9XG4gICAgICAgIHNyYz1cIm1vLnBuZ1wiIC8+XG4gICAgPC9waWN0dXJlPlxuICAgIDxpbWcgY2xhc3M9XCJzaGFkb3dcIiBhbHQ9XCJcIiBzcmM9eydzaGFkb3cucG5nJ30gLz5cbiAgPC9Sb3c+XG48L2Rpdj5cblxuPG1haW4+XG4gIDxzZWN0aW9uPlxuICAgIDx1bD5cbiAgICAgIDwhLS0gPGxpPnRlc3Q8L2xpPiAtLT5cbiAgICA8L3VsPlxuICA8L3NlY3Rpb24+XG48L21haW4+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkFjNEIsR0FBYSw0Q0FBc0IsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OElBQWpELEdBQWEsNENBQXNCLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FiaEUsYUFBYSxHQUFHLEtBQUs7T0FDckIsY0FBYyxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0M4RlIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
