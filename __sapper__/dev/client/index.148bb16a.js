import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, q as create_slot, e as element, c as claim_element, b as children, g as detach_dev, j as attr_dev, l as add_location, o as insert_dev, w as get_slot_context, x as get_slot_changes, y as transition_in, z as transition_out, a as space, r as create_component, h as claim_space, u as claim_component, v as mount_component, p as append_dev, A as destroy_component, t as text, f as claim_text } from './index.df5cc320.js';

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
			add_location(div, file, 12, 0, 170);
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

			if (!current || dirty & /*flexDirection*/ 1 && div_style_value !== (div_style_value = `flex-direction: ${/*flexDirection*/ ctx[0]}; justify-content: ${/*justifyContent*/ ctx[1]}`)) {
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
	let justifyContent = "space-around";
	const writable_props = ["flexDirection"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Row> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("flexDirection" in $$props) $$invalidate(0, flexDirection = $$props.flexDirection);
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
		init(this, options, instance, create_fragment, safe_not_equal, { flexDirection: 0 });

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
}

/* src/routes/index.svelte generated by Svelte v3.16.0 */
const file$1 = "src/routes/index.svelte";

// (53:2) <Row flexDirection="column">
function create_default_slot_1(ctx) {
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
			picture = claim_element(nodes, "PICTURE", {});
			var picture_nodes = children(picture);
			source = claim_element(picture_nodes, "SOURCE", { srcset: true, type: true });
			t0 = claim_space(picture_nodes);
			img0 = claim_element(picture_nodes, "IMG", { alt: true, style: true, src: true });
			picture_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			img1 = claim_element(nodes, "IMG", { alt: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(source, "srcset", "g/mo-366.webp");
			attr_dev(source, "type", "image/webp");
			add_location(source, file$1, 55, 6, 960);
			attr_dev(img0, "alt", "Image of Mohammed Mulazada");
			attr_dev(img0, "style", img0_style_value = `max-width:400px`);
			if (img0.src !== (img0_src_value = "g/mo.png")) attr_dev(img0, "src", img0_src_value);
			add_location(img0, file$1, 56, 6, 1018);
			add_location(picture, file$1, 54, 4, 944);
			attr_dev(img1, "alt", "");
			if (img1.src !== (img1_src_value = "shadow.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file$1, 61, 4, 1143);
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
		id: create_default_slot_1.name,
		type: "slot",
		source: "(53:2) <Row flexDirection=\\\"column\\\">",
		ctx
	});

	return block;
}

// (37:0) <Row>
function create_default_slot(ctx) {
	let div;
	let p0;
	let t0;
	let t1;
	let h1;
	let t2;
	let br0;
	let t3;
	let t4;
	let p1;
	let t5;
	let br1;
	let t6;
	let t7;
	let current;

	const row = new Row({
			props: {
				flexDirection: "column",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			p0 = element("p");
			t0 = text("Front-End");
			t1 = space();
			h1 = element("h1");
			t2 = text("Develo-\n      ");
			br0 = element("br");
			t3 = text("\n      per");
			t4 = space();
			p1 = element("p");
			t5 = text("Welcome to my portfolio. My name is Mohammed, but please call me Mo.\n      ");
			br1 = element("br");
			t6 = text("\n      This site is still a work in progress..");
			t7 = space();
			create_component(row.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Front-End");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Develo-\n      ");
			br0 = claim_element(h1_nodes, "BR", {});
			t3 = claim_text(h1_nodes, "\n      per");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Welcome to my portfolio. My name is Mohammed, but please call me Mo.\n      ");
			br1 = claim_element(p1_nodes, "BR", {});
			t6 = claim_text(p1_nodes, "\n      This site is still a work in progress..");
			p1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			claim_component(row.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "role svelte-gtnjug");
			add_location(p0, file$1, 38, 4, 660);
			add_location(br0, file$1, 41, 6, 719);
			attr_dev(h1, "class", "svelte-gtnjug");
			add_location(h1, file$1, 39, 4, 694);
			add_location(br1, file$1, 47, 6, 836);
			add_location(p1, file$1, 45, 4, 751);
			add_location(div, file$1, 37, 2, 650);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, t0);
			append_dev(div, t1);
			append_dev(div, h1);
			append_dev(h1, t2);
			append_dev(h1, br0);
			append_dev(h1, t3);
			append_dev(div, t4);
			append_dev(div, p1);
			append_dev(p1, t5);
			append_dev(p1, br1);
			append_dev(p1, t6);
			insert_dev(target, t7, anchor);
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
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
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t7);
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(37:0) <Row>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let t1;
	let main;
	let section;
	let ul;
	let current;

	const row = new Row({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(row.$$.fragment);
			t1 = space();
			main = element("main");
			section = element("section");
			ul = element("ul");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			claim_component(row.$$.fragment, nodes);
			t1 = claim_space(nodes);
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
			add_location(ul, file$1, 67, 4, 1217);
			add_location(section, file$1, 66, 2, 1203);
			add_location(main, file$1, 65, 0, 1194);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(row, target, anchor);
			insert_dev(target, t1, anchor);
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
			destroy_component(row, detaching);
			if (detaching) detach_dev(t1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTQ4YmIxNmEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICBsZXQganVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWFyb3VuZFwiO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLlJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2XG4gIGNsYXNzPVwiUm93XCJcbiAgc3R5bGU9e2BmbGV4LWRpcmVjdGlvbjogJHtmbGV4RGlyZWN0aW9ufTsganVzdGlmeS1jb250ZW50OiAke2p1c3RpZnlDb250ZW50fWB9PlxuICA8c2xvdCAvPlxuPC9kaXY+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgUm93IGZyb20gXCIuLi9jb21wb25lbnRzL1Jvdy5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA5LjM3NWVtO1xuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNWI1Y2YxLCAjMjFiM2ZmKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiAwLjk7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIH1cblxuICAucm9sZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkhvbWUgfCBQb3J0Zm9saW8gb2YgTW9oYW1tZWQgTXVsYXphZGE8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxSb3c+XG4gIDxkaXY+XG4gICAgPHAgY2xhc3M9XCJyb2xlXCI+RnJvbnQtRW5kPC9wPlxuICAgIDxoMT5cbiAgICAgIERldmVsby1cbiAgICAgIDxiciAvPlxuICAgICAgcGVyXG4gICAgPC9oMT5cblxuICAgIDxwPlxuICAgICAgV2VsY29tZSB0byBteSBwb3J0Zm9saW8uIE15IG5hbWUgaXMgTW9oYW1tZWQsIGJ1dCBwbGVhc2UgY2FsbCBtZSBNby5cbiAgICAgIDxiciAvPlxuICAgICAgVGhpcyBzaXRlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4uXG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICA8Um93IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cblxuICAgIDxwaWN0dXJlPlxuICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJnL21vLTM2Ni53ZWJwXCIgdHlwZT1cImltYWdlL3dlYnBcIiAvPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJJbWFnZSBvZiBNb2hhbW1lZCBNdWxhemFkYVwiXG4gICAgICAgIHN0eWxlPXtgbWF4LXdpZHRoOjQwMHB4YH1cbiAgICAgICAgc3JjPVwibW8ucG5nXCIgLz5cbiAgICA8L3BpY3R1cmU+XG4gICAgPGltZyBhbHQ9XCJcIiBzcmM9eydzaGFkb3cucG5nJ30gLz5cbiAgPC9Sb3c+XG48L1Jvdz5cblxuPG1haW4+XG4gIDxzZWN0aW9uPlxuICAgIDx1bD5cbiAgICAgIDwhLS0gPGxpPnRlc3Q8L2xpPiAtLT5cbiAgICA8L3VsPlxuICA8L3NlY3Rpb24+XG48L21haW4+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkFjNEIsR0FBYSw0Q0FBc0IsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEhBQWpELEdBQWEsNENBQXNCLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FiaEUsYUFBYSxHQUFHLEtBQUs7S0FDNUIsY0FBYyxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDMkRoQixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
