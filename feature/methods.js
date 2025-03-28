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
      const agent = this.agent();
      const global = [];
      authority.global.forEach((item,index) => {
        global.push(`::begin:global:${item.key}:${item.id}`);
        for (let x in item) {
          global.push(`${x}: ${item[x]}`);
        }
        global.push(`::end:global:${item.key}:${this.lib.hash(item)}`);
      });
      const concerns = [];
      authority.concerns.forEach((item, index) => {
        concerns.push(`${index + 1}. ${item}`);
      })
      
      const info = [
        '::BEGIN:AUTHORITY',
        '### Client',
        `::begin:client:${authority.client_id}`,
        `id: ${authority.client_id}`,
        `client: ${authority.client_name}`,
        '**concerns**',
        concerns.join('\n'),
        `::end:client:${this.lib.hash(authority)}`,
        '### Global',
        global.join('\n'),
        '::END:AUTHORITY'
      ].join('\n');
      this.question(`${this.askChr}feecting parse ${info}`).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: authority.concerns,
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      })
    });
  },
};
