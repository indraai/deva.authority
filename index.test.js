"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:21484631554539747920 LICENSE.md

// Authority Deva Test File

const {expect} = require('chai')
const AuthorityDeva = require('./index.js');

describe(AuthorityDeva.me.name, () => {
  beforeEach(() => {
    return AuthorityDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(AuthorityDeva).to.be.an('object');
    expect(AuthorityDeva).to.have.property('agent');
    expect(AuthorityDeva).to.have.property('vars');
    expect(AuthorityDeva).to.have.property('listeners');
    expect(AuthorityDeva).to.have.property('methods');
    expect(AuthorityDeva).to.have.property('modules');
  });
})
