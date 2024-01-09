describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should append a table to with the server input', () => {
    submitServerInfo();
    updateServerTable();
    expect(serverTbody.innerText).toContain('Alice');
  });
  it('should not add a new server with empty input', () => {
    serverNameInput.value = '';
    submitServerInfo();
    expect(serverTbody.innerText).toBe('');
  });
  afterEach(function () {
    allServers = {};
    updateServerTable();
  });
});
