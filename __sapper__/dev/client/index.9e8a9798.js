import { S as SvelteComponentDev, i as init, d as dispatch_dev, D as globals, s as safe_not_equal, E as validate_each_argument, v as validate_slots, e as element, o as text, n as space, a as claim_element, b as children, u as claim_text, f as detach_dev, r as claim_space, g as attr_dev, h as add_location, j as insert_dev, x as append_dev, F as set_data_dev, p as create_component, q as query_selector_all, w as claim_component, y as mount_component, t as transition_in, m as transition_out, z as destroy_component, G as destroy_each } from './client.e7c28803.js';
import { G as GradientHeading } from './GradientHeading.8078a258.js';

/* src\routes\blog\index.svelte generated by Svelte v3.20.1 */

const { console: console_1 } = globals;
const file = "src\\routes\\blog\\index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (29:2) <GradientHeading>
function create_default_slot(ctx) {
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			t0 = text("Recent\r\n    ");
			br = element("br");
			t1 = text("\r\n    posts");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Recent\r\n    ");
			br = claim_element(nodes, "BR", {});
			t1 = claim_text(nodes, "\r\n    posts");
			this.h();
		},
		h: function hydrate() {
			add_location(br, file, 30, 4, 597);
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
		source: "(29:2) <GradientHeading>",
		ctx
	});

	return block;
}

// (36:4) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*post*/ ctx[1].title + "";
	let t0;
	let a_href_value;
	let t1;
	let summary;
	let t2_value = /*post*/ ctx[1].summary + "";
	let t2;
	let t3;
	let br;
	let t4;
	let t5_value = /*post*/ ctx[1].readingTime + "";
	let t5;
	let t6;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			summary = element("summary");
			t2 = text(t2_value);
			t3 = space();
			br = element("br");
			t4 = space();
			t5 = text(t5_value);
			t6 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, rel: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			summary = claim_element(li_nodes, "SUMMARY", { class: true });
			var summary_nodes = children(summary);
			t2 = claim_text(summary_nodes, t2_value);
			t3 = claim_space(summary_nodes);
			br = claim_element(summary_nodes, "BR", {});
			t4 = claim_space(summary_nodes);
			t5 = claim_text(summary_nodes, t5_value);
			summary_nodes.forEach(detach_dev);
			t6 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "underline");
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[1].slug + "/");
			add_location(a, file, 41, 8, 919);
			add_location(br, file, 46, 10, 1090);
			attr_dev(summary, "class", "italic");
			add_location(summary, file, 44, 8, 1028);
			add_location(li, file, 40, 6, 905);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
			append_dev(li, summary);
			append_dev(summary, t2);
			append_dev(summary, t3);
			append_dev(summary, br);
			append_dev(summary, t4);
			append_dev(summary, t5);
			append_dev(li, t6);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[1].slug + "/")) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].summary + "")) set_data_dev(t2, t2_value);
			if (dirty & /*posts*/ 1 && t5_value !== (t5_value = /*post*/ ctx[1].readingTime + "")) set_data_dev(t5, t5_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(36:4) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div;
	let t1;
	let ul;
	let current;

	const gradientheading = new GradientHeading({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			create_component(gradientheading.$$.fragment);
			t1 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1b274k5\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(gradientheading.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			attr_dev(ul, "class", "svelte-1emtgb4");
			add_location(ul, file, 34, 2, 642);
			attr_dev(div, "class", "container py-24 lg:py-32 px-4 mx-auto max-w-6xl");
			add_location(div, file, 27, 0, 497);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(gradientheading, div, null);
			append_dev(div, t1);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			const gradientheading_changes = {};

			if (dirty & /*$$scope*/ 16) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);

			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
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
			if (detaching) detach_dev(div);
			destroy_component(gradientheading);
			destroy_each(each_blocks, detaching);
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

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	console.log(posts);
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({ preload, posts, GradientHeading });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console_1.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWU4YTk3OTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKVxyXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgICAudGhlbihwb3N0cyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgcG9zdHMgfTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCBwb3N0cztcclxuICBpbXBvcnQgR3JhZGllbnRIZWFkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYWRpZW50SGVhZGluZy5zdmVsdGVcIjtcclxuICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcbiAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBweS0yNCBsZzpweS0zMiBweC00IG14LWF1dG8gbWF4LXctNnhsXCI+XHJcbiAgPEdyYWRpZW50SGVhZGluZz5cclxuICAgIFJlY2VudFxyXG4gICAgPGJyIC8+XHJcbiAgICBwb3N0c1xyXG4gIDwvR3JhZGllbnRIZWFkaW5nPlxyXG5cclxuICA8dWw+XHJcbiAgICB7I2VhY2ggcG9zdHMgYXMgcG9zdH1cclxuICAgICAgPCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xyXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcclxuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXHJcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBjbGFzcz1cInVuZGVybGluZVwiIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImJsb2cve3Bvc3Quc2x1Z30vXCI+XHJcbiAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN1bW1hcnkgY2xhc3M9XCJpdGFsaWNcIj5cclxuICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtwb3N0LnJlYWRpbmdUaW1lfVxyXG4gICAgICAgIDwvc3VtbWFyeT5cclxuICAgICAgPC9saT5cclxuICAgIHsvZWFjaH1cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkEwQ1csR0FBSSxJQUFDLEtBQUs7Ozs7O3lCQUdWLEdBQUksSUFBQyxPQUFPOzs7Ozt5QkFFWixHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQU42QixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUN0RCxHQUFJLElBQUMsS0FBSzs7a0ZBRG1DLEdBQUksSUFBQyxJQUFJOzs7O2dFQUl0RCxHQUFJLElBQUMsT0FBTztnRUFFWixHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVpoQixHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBQUMsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FsQ1EsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLGNBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsS0FBSztXQUNBLEtBQUs7Ozs7O09BSlQsS0FBSztDQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
