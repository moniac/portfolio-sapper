import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, v as create_component, e as element, h as claim_space, w as claim_component, c as claim_element, b as children, g as detach_dev, j as attr_dev, l as add_location, o as insert_dev, x as mount_component, A as transition_in, B as transition_out, C as destroy_component, t as text, f as claim_text, D as set_data_dev } from './index.07b4eea1.js';
import { G as GradientHeading } from './GradientHeading.fe17b993.js';

/* src/routes/blog/[slug].svelte generated by Svelte v3.16.0 */
const file = "src/routes/blog/[slug].svelte";

// (61:0) <GradientHeading className="px-16">
function create_default_slot(ctx) {
	let t_value = /*post*/ ctx[0].title + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post*/ 1 && t_value !== (t_value = /*post*/ ctx[0].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(61:0) <GradientHeading className=\\\"px-16\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let t1;
	let div;
	let raw_value = /*post*/ ctx[0].html + "";
	let current;
	document.title = title_value = /*post*/ ctx[0].title;

	const gradientheading = new GradientHeading({
			props: {
				className: "px-16",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(gradientheading.$$.fragment);
			t1 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			claim_component(gradientheading.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "content svelte-1ycksgq");
			add_location(div, file, 62, 0, 1425);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(gradientheading, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			div.innerHTML = raw_value;
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			const gradientheading_changes = {};

			if (dirty & /*$$scope, post*/ 3) {
				gradientheading_changes.$$scope = { dirty, ctx };
			}

			gradientheading.$set(gradientheading_changes);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) div.innerHTML = raw_value;		},
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
			destroy_component(gradientheading, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
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

async function preload({ params, query }) {
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => {
		return { post };
	};

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	return [post];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjcyMjIyMGM0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGJsb2cvJHtwYXJhbXMuc2x1Z30uanNvbmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKHJlcy5zdGF0dXMsIGRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEdyYWRpZW50SGVhZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFkaWVudEhlYWRpbmcuc3ZlbHRlXCI7XG4gIGV4cG9ydCBsZXQgcG9zdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cbiAgLmNvbnRlbnQgOmdsb2JhbChoMikge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHVsKSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwobGkpIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPEdyYWRpZW50SGVhZGluZyBjbGFzc05hbWU9XCJweC0xNlwiPntwb3N0LnRpdGxlfTwvR3JhZGllbnRIZWFkaW5nPlxuXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICB7QGh0bWwgcG9zdC5odG1sfVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7d0JBNERvQyxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7NkRBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdyQyxHQUFJLElBQUMsSUFBSTs7eUNBTlIsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21GQUFWLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7OzsrRUFNWCxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE5RE0sT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BR3JDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTLE1BQU0sQ0FBQyxJQUFJO09BQzFDLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTs7S0FFdkIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1dBQ1gsSUFBSSxFQUFFLElBQUk7O0VBRW5CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzs7Ozs7T0FSNUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
