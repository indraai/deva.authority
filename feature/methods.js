"use strict";
// Copyright ©2000-2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:55837274153724560389 LICENSE.md
// Sunday, November 23, 2025 - 5:58:26 PM

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
