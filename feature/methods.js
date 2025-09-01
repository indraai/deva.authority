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
