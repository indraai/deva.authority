// Copyright (c)2025 Quinn Michaels
// Authority Deva
import Deva from '@indra.ai/deva';
import pkg from './package.json' with {type:'json'};

import data from './data.json' with {type:'json'};
const {agent,vars} = data.DATA;

// set the __dirname
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';    
const __dirname = dirname(fileURLToPath(import.meta.url));

const info = {
  id: pkg.id,
  name: pkg.name,
  describe: pkg.description,
  version: pkg.version,
  url: pkg.homepage,
  dir: __dirname,
  git: pkg.repository.url,
  bugs: pkg.bugs.url,
  author: pkg.author,
  license: pkg.license,
  copyright: pkg.copyright,
};

const AUTHORITY = new Deva({
  info,
  agent,
  vars,
  utils: {
    translate(input) {return input.trim();},
    parse(input) {return input.trim();},
    process(input) {return input.trim();}
  },
  listeners: {},
  modules: {},
  deva: {},
  func: {},
  methods: {
    /**************
    method: file
    params: packet
    describe: The view method replays the request to the view function to return
    a document from the text parameter.
    ***************/
    file(packet) {      
      this.context('file', packet.q.text);
      this.action('method', `file:${packet.q.text}`);
      const agent = this.agent();
      return new Promise((resolve, reject) => {
        this.state('get', packet.q.text);
        const doc = this.func.file(packet.q);
        this.question(`${this.askChr}feecting parse ${doc}`).then(feecting => {
          this.state('resolve', `view:${packet.q.text}`);
          return resolve({
            text: feecting.a.text,
            html: feecting.a.html,
            data: feecting.a.data,
          });
        }).catch(err => {
          this.context('reject', `view:${packet.q.text}`);
          return this.error(err, packet, reject);
        })
      });
    },    
    
  },
  onReady(data, resolve) {
    this.prompt(this.vars.messages.ready);
    return resolve(data);
  },
  onError(err, data, reject) {
    this.prompt(this.vars.messages.error);
    console.log(err);
    return reject(err);
  }
});
export default AUTHORITY
