
import { mount } from '@vue/test-utils'
import Parent from "../src/components/Parent.vue";


test("call to parent" , () => { 
    const dom = mount(Parent , {
        propsData : {
            msg : "I'M PARENT"
        }
    });
    expect(dom.text()).toContain("I'M PARENT");
    expect(dom.find("#chips").text()).toContain(10);
    async() => {
        await dom.find("button.give").trigger("click");
        expect(dom.find("#chips").text()).toContain(9);
    }
})

