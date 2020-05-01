import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, D as validate_each_argument, v as validate_slots, e as element, o as text, n as space, a as claim_element, b as children, u as claim_text, f as detach_dev, r as claim_space, g as attr_dev, h as add_location, j as insert_dev, x as append_dev, E as set_data_dev, p as create_component, q as query_selector_all, w as claim_component, y as mount_component, F as set_input_value, G as listen_dev, t as transition_in, m as transition_out, z as destroy_component, H as destroy_each } from './client.56d5123a.js';
import { G as GradientHeading } from './GradientHeading.25f4563b.js';

/* src\routes\blog\index.svelte generated by Svelte v3.21.0 */
const file = "src\\routes\\blog\\index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (33:2) <GradientHeading>
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
			add_location(br, file, 34, 4, 711);
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
		source: "(33:2) <GradientHeading>",
		ctx
	});

	return block;
}

// (46:4) {#each filteredPost as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*post*/ ctx[4].title + "";
	let t0;
	let a_href_value;
	let t1;
	let summary;
	let t2_value = /*post*/ ctx[4].summary + "";
	let t2;
	let t3;
	let br;
	let t4;
	let t5_value = /*post*/ ctx[4].readingTime + "";
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
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[4].slug + "/");
			add_location(a, file, 51, 8, 1247);
			add_location(br, file, 56, 10, 1418);
			attr_dev(summary, "class", "italic");
			add_location(summary, file, 54, 8, 1356);
			add_location(li, file, 50, 6, 1233);
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
			if (dirty & /*filteredPost*/ 2 && t0_value !== (t0_value = /*post*/ ctx[4].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*filteredPost*/ 2 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[4].slug + "/")) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*filteredPost*/ 2 && t2_value !== (t2_value = /*post*/ ctx[4].summary + "")) set_data_dev(t2, t2_value);
			if (dirty & /*filteredPost*/ 2 && t5_value !== (t5_value = /*post*/ ctx[4].readingTime + "")) set_data_dev(t5, t5_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(46:4) {#each filteredPost as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div;
	let t1;
	let input;
	let t2;
	let ul;
	let current;
	let dispose;

	const gradientheading = new GradientHeading({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let each_value = /*filteredPost*/ ctx[1];
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
			input = element("input");
			t2 = space();
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
			input = claim_element(div_nodes, "INPUT", { class: true, type: true });
			t2 = claim_space(div_nodes);
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
			attr_dev(input, "class", "shadow appearance-none border rounded w-full py-2 px-3 mb-8\r\n    text-gray-700 leading-tight focus:outline-none focus:shadow-outline");
			attr_dev(input, "type", "text");
			add_location(input, file, 38, 2, 756);
			attr_dev(ul, "class", "svelte-1emtgb4");
			add_location(ul, file, 44, 2, 963);
			attr_dev(div, "class", "container mx-auto max-w-2xl py-8 lg:py-24 px-8");
			add_location(div, file, 31, 0, 612);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(gradientheading, div, null);
			append_dev(div, t1);
			append_dev(div, input);
			set_input_value(input, /*searchTerm*/ ctx[0]);
			append_dev(div, t2);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
			if (remount) dispose();
			dispose = listen_dev(input, "input", /*input_input_handler*/ ctx[3]);
		},
		p: function update(ctx, [dirty]) {
			const gradientheading_changes = {};

			if (dirty & /*$$scope*/ 128) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);

			if (dirty & /*searchTerm*/ 1 && input.value !== /*searchTerm*/ ctx[0]) {
				set_input_value(input, /*searchTerm*/ ctx[0]);
			}

			if (dirty & /*filteredPost*/ 2) {
				each_value = /*filteredPost*/ ctx[1];
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
			dispose();
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
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);

	function input_input_handler() {
		searchTerm = this.value;
		$$invalidate(0, searchTerm);
	}

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(2, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		preload,
		posts,
		GradientHeading,
		searchTerm,
		filteredPost
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(2, posts = $$props.posts);
		if ("searchTerm" in $$props) $$invalidate(0, searchTerm = $$props.searchTerm);
		if ("filteredPost" in $$props) $$invalidate(1, filteredPost = $$props.filteredPost);
	};

	let searchTerm;
	let filteredPost;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*posts, searchTerm*/ 5) {
			 $$invalidate(1, filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())));
		}
	};

	 $$invalidate(0, searchTerm = "");
	return [searchTerm, filteredPost, posts, input_input_handler];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[2] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTM4NGQ4MDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKVxyXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgICAudGhlbihwb3N0cyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgcG9zdHMgfTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCBwb3N0cztcclxuICBpbXBvcnQgR3JhZGllbnRIZWFkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYWRpZW50SGVhZGluZy5zdmVsdGVcIjtcclxuXHJcbiAgJDogc2VhcmNoVGVybSA9IFwiXCI7XHJcbiAgJDogZmlsdGVyZWRQb3N0ID0gcG9zdHMuZmlsdGVyKHBvc3QgPT5cclxuICAgIHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctMnhsIHB5LTggbGc6cHktMjQgcHgtOFwiPlxyXG4gIDxHcmFkaWVudEhlYWRpbmc+XHJcbiAgICBSZWNlbnRcclxuICAgIDxiciAvPlxyXG4gICAgcG9zdHNcclxuICA8L0dyYWRpZW50SGVhZGluZz5cclxuXHJcbiAgPGlucHV0XHJcbiAgICBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyBtYi04XHJcbiAgICB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIGJpbmQ6dmFsdWU9e3NlYXJjaFRlcm19IC8+XHJcblxyXG4gIDx1bD5cclxuICAgIHsjZWFjaCBmaWx0ZXJlZFBvc3QgYXMgcG9zdH1cclxuICAgICAgPCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xyXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcclxuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXHJcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBjbGFzcz1cInVuZGVybGluZVwiIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImJsb2cve3Bvc3Quc2x1Z30vXCI+XHJcbiAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN1bW1hcnkgY2xhc3M9XCJpdGFsaWNcIj5cclxuICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtwb3N0LnJlYWRpbmdUaW1lfVxyXG4gICAgICAgIDwvc3VtbWFyeT5cclxuICAgICAgPC9saT5cclxuICAgIHsvZWFjaH1cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBb0RXLEdBQUksSUFBQyxLQUFLOzs7Ozt5QkFHVixHQUFJLElBQUMsT0FBTzs7Ozs7eUJBRVosR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFONkIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFDdEQsR0FBSSxJQUFDLEtBQUs7O3lGQURtQyxHQUFJLElBQUMsSUFBSTs7Ozt1RUFJdEQsR0FBSSxJQUFDLE9BQU87dUVBRVosR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FaaEIsR0FBWTs7OztnQ0FBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQUhNLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFBVixHQUFVOzBDQUFWLEdBQVU7Ozs7a0NBR2YsR0FBWTs7OzsrQkFBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTVDUSxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7UUFDOUIsSUFBSSxDQUFDLEtBQUssY0FDZCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxLQUFLO1dBQ0EsS0FBSzs7Ozs7T0FKVCxLQUFLOzs7Ozs7Ozs7OztFQXlDRixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXJDckIsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVc7Ozs7a0JBRnZELFVBQVUsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
