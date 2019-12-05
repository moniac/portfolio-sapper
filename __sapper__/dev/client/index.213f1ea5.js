import { S as SvelteComponentDev, i as init, d as dispatch_dev, q as globals, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, o as insert_dev, p as append_dev, D as set_data_dev, v as create_component, w as claim_component, x as mount_component, A as transition_in, B as transition_out, C as destroy_component, L as destroy_each } from './index.07b4eea1.js';
import { G as GradientHeading } from './GradientHeading.377867bc.js';

/* src/routes/blog/index.svelte generated by Svelte v3.16.0 */

const { console: console_1 } = globals;
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (30:2) <GradientHeading>
function create_default_slot(ctx) {
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			t0 = text("Recent\n    ");
			br = element("br");
			t1 = text("\n    posts");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Recent\n    ");
			br = claim_element(nodes, "BR", {});
			t1 = claim_text(nodes, "\n    posts");
			this.h();
		},
		h: function hydrate() {
			add_location(br, file, 31, 4, 563);
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
		source: "(30:2) <GradientHeading>",
		ctx
	});

	return block;
}

// (37:4) {#each posts as post}
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

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			summary = element("summary");
			t2 = text(t2_value);
			t3 = space();
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
			summary = claim_element(li_nodes, "SUMMARY", {});
			var summary_nodes = children(summary);
			t2 = claim_text(summary_nodes, t2_value);
			summary_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "underline");
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[1].slug);
			add_location(a, file, 42, 8, 874);
			add_location(summary, file, 45, 8, 979);
			add_location(li, file, 41, 6, 861);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
			append_dev(li, summary);
			append_dev(summary, t2);
			append_dev(li, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[1].slug)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].summary + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(37:4) {#each posts as post}",
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
			attr_dev(ul, "class", "svelte-1uzksw3");
			add_location(ul, file, 35, 2, 604);
			attr_dev(div, "class", "container py-32");
			add_location(div, file, 28, 0, 498);
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
		console.log(posts);
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

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => {
		return { posts };
	};

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

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
		const props = options.props || ({});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjEzZjFlYTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goYGJsb2cuanNvbmApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgICAgIHJldHVybiB7IHBvc3RzIH07XG4gICAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGltcG9ydCBHcmFkaWVudEhlYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhZGllbnRIZWFkaW5nLnN2ZWx0ZVwiO1xuICBjb25zb2xlLmxvZyhwb3N0cyk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICB1bCB7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+QmxvZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB5LTMyXCI+XG4gIDxHcmFkaWVudEhlYWRpbmc+XG4gICAgUmVjZW50XG4gICAgPGJyIC8+XG4gICAgcG9zdHNcbiAgPC9HcmFkaWVudEhlYWRpbmc+XG5cbiAgPHVsPlxuICAgIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICAgICAgPCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzPVwidW5kZXJsaW5lXCIgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5zbHVnfVwiPlxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxzdW1tYXJ5Pntwb3N0LnN1bW1hcnl9PC9zdW1tYXJ5PlxuICAgICAgPC9saT5cbiAgICB7L2VhY2h9XG4gIDwvdWw+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBMkNXLEdBQUksSUFBQyxLQUFLOzs7Ozt5QkFFSCxHQUFJLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFIMEIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7OztnRUFDdEQsR0FBSSxJQUFDLEtBQUs7O2tGQURtQyxHQUFJLElBQUMsSUFBSTs7OztnRUFHL0MsR0FBSSxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFUbkIsR0FBSzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FuQ1EsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLGNBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsS0FBSztFQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSztXQUNSLEtBQUs7Ozs7O09BTFQsS0FBSztDQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
