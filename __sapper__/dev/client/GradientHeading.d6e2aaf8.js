import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, A as empty, j as insert_dev, B as group_outros, m as transition_out, C as check_outros, t as transition_in, f as detach_dev, c as create_slot, e as element, a as claim_element, b as children, g as attr_dev, h as add_location, k as get_slot_context, l as get_slot_changes } from './client.bc28ad82.js';

/* src\components\GradientHeading.svelte generated by Svelte v3.20.1 */

const file = "src\\components\\GradientHeading.svelte";

// (50:2) {:else}
function create_else_block(ctx) {
	let h3;
	let h3_class_value;
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			h3 = element("h3");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			if (default_slot) default_slot.l(h3_nodes);
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", h3_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-luhsqx");
			add_location(h3, file, 50, 4, 1115);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);

			if (default_slot) {
				default_slot.m(h3, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
				}
			}

			if (!current || dirty & /*depth, className*/ 3 && h3_class_value !== (h3_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-luhsqx")) {
				attr_dev(h3, "class", h3_class_value);
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
			if (detaching) detach_dev(h3);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(50:2) {:else}",
		ctx
	});

	return block;
}

// (46:2) {#if depth === 2}
function create_if_block_1(ctx) {
	let h2;
	let h2_class_value;
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			h2 = element("h2");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			if (default_slot) default_slot.l(h2_nodes);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", h2_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-luhsqx");
			add_location(h2, file, 46, 4, 1022);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);

			if (default_slot) {
				default_slot.m(h2, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
				}
			}

			if (!current || dirty & /*depth, className*/ 3 && h2_class_value !== (h2_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-luhsqx")) {
				attr_dev(h2, "class", h2_class_value);
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
			if (detaching) detach_dev(h2);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(46:2) {#if depth === 2}",
		ctx
	});

	return block;
}

// (41:0) {#if depth === 1}
function create_if_block(ctx) {
	let h1;
	let h1_class_value;
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			h1 = element("h1");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			if (default_slot) default_slot.l(h1_nodes);
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", h1_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " -ml-1 mb-4 lg:mb-16 lg:-ml-2" + " svelte-luhsqx");
			add_location(h1, file, 41, 2, 885);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);

			if (default_slot) {
				default_slot.m(h1, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
				}
			}

			if (!current || dirty & /*depth, className*/ 3 && h1_class_value !== (h1_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " -ml-1 mb-4 lg:mb-16 lg:-ml-2" + " svelte-luhsqx")) {
				attr_dev(h1, "class", h1_class_value);
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
			if (detaching) detach_dev(h1);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(41:0) {#if depth === 1}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*depth*/ ctx[0] === 1) return 0;
		if (/*depth*/ ctx[0] === 2) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	let { depth = 1 } = $$props;
	let { className = "" } = $$props;
	const writable_props = ["depth", "className"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<GradientHeading> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("GradientHeading", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("depth" in $$props) $$invalidate(0, depth = $$props.depth);
		if ("className" in $$props) $$invalidate(1, className = $$props.className);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ depth, className });

	$$self.$inject_state = $$props => {
		if ("depth" in $$props) $$invalidate(0, depth = $$props.depth);
		if ("className" in $$props) $$invalidate(1, className = $$props.className);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [depth, className, $$scope, $$slots];
}

class GradientHeading extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { depth: 0, className: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "GradientHeading",
			options,
			id: create_fragment.name
		});
	}

	get depth() {
		throw new Error("<GradientHeading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set depth(value) {
		throw new Error("<GradientHeading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get className() {
		throw new Error("<GradientHeading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set className(value) {
		throw new Error("<GradientHeading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { GradientHeading as G };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhZGllbnRIZWFkaW5nLmQ2ZTJhYWY4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCBkZXB0aCA9IDE7XHJcbiAgZXhwb3J0IGxldCBjbGFzc05hbWUgPSBcIlwiO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAuR3JhZGllbnRIZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YjVjZjEsICMyMWIzZmYpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMC45O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAyMjVtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uOiBodWUgMTBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbiAgfVxyXG5cclxuICA6Z2xvYmFsKC5kYXJrLW1vZGUgLkdyYWRpZW50SGVhZGluZykge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YxNWI3NCwgI2ZmNjAyMSk7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGh1ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKC0yMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOS4zNzVlbTtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG57I2lmIGRlcHRoID09PSAxfVxyXG4gIDxoMSBjbGFzcz1cIkdyYWRpZW50SGVhZGluZyBoe2RlcHRofSB7Y2xhc3NOYW1lfSAtbWwtMSBtYi00IGxnOm1iLTE2IGxnOi1tbC0yXCI+XHJcbiAgICA8c2xvdCAvPlxyXG4gIDwvaDE+XHJcbns6ZWxzZX1cclxuICB7I2lmIGRlcHRoID09PSAyfVxyXG4gICAgPGgyIGNsYXNzPVwiR3JhZGllbnRIZWFkaW5nIGh7ZGVwdGh9IHtjbGFzc05hbWV9XCI+XHJcbiAgICAgIDxzbG90IC8+XHJcbiAgICA8L2gyPlxyXG4gIHs6ZWxzZX1cclxuICAgIDxoMyBjbGFzcz1cIkdyYWRpZW50SGVhZGluZyBoe2RlcHRofSB7Y2xhc3NOYW1lfVwiPlxyXG4gICAgICA8c2xvdCAvPlxyXG4gICAgPC9oMz5cclxuICB7L2lmfVxyXG57L2lmfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRUFrRGlDLEdBQUssMEJBQUcsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswSEFBakIsR0FBSywwQkFBRyxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBFQUpqQixHQUFLLDBCQUFHLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEhBQWpCLEdBQUssMEJBQUcsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRUFMbkIsR0FBSywwQkFBRyxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBIQUFqQixHQUFLLDBCQUFHLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFEM0MsR0FBSyxRQUFLLENBQUM7Z0JBS1QsR0FBSyxRQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1Q0wsS0FBSyxHQUFHLENBQUM7T0FDVCxTQUFTLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
