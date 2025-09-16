"use strict";
// ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:71523984134178103195 LICENSE.md

export default {
  /**************
  method: authority
  params: packet
  describe: The global authority feature that installs with every agent
  ***************/
  async authority(packet) {
    const authority = await this.methods.sign('authority', 'default', packet);
    return authority;
  },
};
