import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, E as empty, o as insert_dev, A as transition_in, B as transition_out, g as detach_dev, r as create_slot, e as element, c as claim_element, b as children, j as attr_dev, l as add_location, y as get_slot_context, z as get_slot_changes } from './index.07b4eea1.js';

/* src/components/GradientHeading.svelte generated by Svelte v3.16.0 */

const file = "src/components/GradientHeading.svelte";

// (43:2) {:else}
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
			attr_dev(h3, "class", h3_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-b7u5h5");
			add_location(h3, file, 43, 4, 962);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);

			if (default_slot) {
				default_slot.m(h3, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
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
		source: "(43:2) {:else}",
		ctx
	});

	return block;
}

// (39:2) {#if depth === 2}
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
			attr_dev(h2, "class", h2_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-b7u5h5");
			add_location(h2, file, 39, 4, 873);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);

			if (default_slot) {
				default_slot.m(h2, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
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
		source: "(39:2) {#if depth === 2}",
		ctx
	});

	return block;
}

// (34:0) {#if depth === 1}
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
			attr_dev(h1, "class", h1_class_value = "GradientHeading h" + /*depth*/ ctx[0] + " " + /*className*/ ctx[1] + " svelte-b7u5h5");
			add_location(h1, file, 34, 2, 770);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);

			if (default_slot) {
				default_slot.m(h1, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
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
		source: "(34:0) {#if depth === 1}",
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
			if_block.p(ctx, dirty);
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
	const depth = 1;
	const className = "p-16";
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

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
		return this.$$.ctx[0];
	}

	set depth(value) {
		throw new Error("<GradientHeading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get className() {
		return this.$$.ctx[1];
	}

	set className(value) {
		throw new Error("<GradientHeading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { GradientHeading as G };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhZGllbnRIZWFkaW5nLmYxNTQwYjFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBjb25zdCBkZXB0aCA9IDE7XG4gIGV4cG9ydCBjb25zdCBjbGFzc05hbWUgPSBcInAtMTZcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5HcmFkaWVudEhlYWRpbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YjVjZjEsICMyMWIzZmYpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTtcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDIyNW1zIGVhc2U7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGh1ZSAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA0LjhlbTtcbiAgfVxuXG4gIDpnbG9iYWwoLmRhcmstbW9kZSAuR3JhZGllbnRIZWFkaW5nKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YxNWI3NCwgI2ZmNjAyMSk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaDEge1xuICAgICAgZm9udC1zaXplOiA5LjM3NWVtO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxueyNpZiBkZXB0aCA9PT0gMX1cbiAgPGgxIGNsYXNzPVwiR3JhZGllbnRIZWFkaW5nIGh7ZGVwdGh9IHtjbGFzc05hbWV9XCI+XG4gICAgPHNsb3QgLz5cbiAgPC9oMT5cbns6ZWxzZX1cbiAgeyNpZiBkZXB0aCA9PT0gMn1cbiAgICA8aDIgY2xhc3M9XCJHcmFkaWVudEhlYWRpbmcgaHtkZXB0aH0ge2NsYXNzTmFtZX1cIj5cbiAgICAgIDxzbG90IC8+XG4gICAgPC9oMj5cbiAgezplbHNlfVxuICAgIDxoMyBjbGFzcz1cIkdyYWRpZW50SGVhZGluZyBoe2RlcHRofSB7Y2xhc3NOYW1lfVwiPlxuICAgICAgPHNsb3QgLz5cbiAgICA8L2gzPlxuICB7L2lmfVxuey9pZn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VHQTJDeUMsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUdBSlQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUdBTFgsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFEM0MsR0FBSyxRQUFLLENBQUM7Z0JBS1QsR0FBSyxRQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXJDSCxLQUFLLEdBQUcsQ0FBQztPQUNULFNBQVMsR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
