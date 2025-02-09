export default {
  /**************
  method: Authority
  params: packet
  describe: The global service feature that installs with every agent
  ***************/
  authority(packet) {
    this.context('feature');
    return new Promise((resolve, reject) => {
      const authority = this.authority();
      const data = {};
      this.question(`#docs raw feature/authority`).then(doc => {
        data.doc = doc.a.data;
        const info = [
          `## Authority`,
          `::begin:authority:${authority.id}`,
          `client: ${authority.client_name}`,
          `concerns: ${authority.concerns.join(', ')}`,
          `::end:authority:${this.hash(authority)}`,
        ].join('\n');
        const text = doc.a.text.replace(/::info::/g, info)
        return this.question(`${this.askChr}feecting parse ${text}`)
      }).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: authority
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      })
    });
  },
};
