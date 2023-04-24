
import Library1 from "module1/dist/node";
// import { FlowRunner } from "@cognitivegarage/flow-runner";
let json = {
  "bmi-calc": {
      "id": "bmi-calc",
      "type": "bmi",
      "target": {
          "first-end": "bmi-1-end",
          "second-end": "bmi-2-end"
      },
      "config": {
          "references": [
              "height",
              "weight"
          ]
      }
  },
  "bmi-1-end": {
      "id": "bmi-1-end",
      "type": "save",
      "target": {},
      "config": {
          "references": [
              "Age"
          ],
          "data": "This is the first end"
      }
  },
  "bmi-2-end": {
      "id": "bmi-2-end",
      "type": "save",
      "target": {},
      "config": {
          "references": [
              "Age"
          ],
          "data": "This is the Second end"
      }
  }
}

// FlowRunner.registerOperation("bmi", async (context, flow_config)=>{
//   context['bmi'] = context['height'] * context['weight'];
//   if(Math.floor(Math.random() * 10)>5){
//       flow_config['selected_target'] = 'second-end'
//   } 
// })
// FlowRunner.registerOperation("save", async (context, flow_config)=>{
//   console.log(flow_config)
//   context['save-bmi'] = context['bmi'] * 10000;
//   context['msg'] = flow_config['node_config']['data'];
// })


export class Main {
  #fetch: any;

  constructor(fetch: any) {
    this.#fetch = fetch;
  }


  share(){
    // let r = new FlowRunner(json, true);
    let c = new Library1();
    return c.special_func() + "BYEBYEBYEBYE";
  }
  async getData() {
    const res = await this.#fetch('https://google.com');
    return res.json();
  }
}
