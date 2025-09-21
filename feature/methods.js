"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:21484631554539747920 LICENSE.md

// Authority Deva Feature Methods

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
