'use strict';

var chai = require("chai")
, chaiHttp = require("chai-http")
, http = require("http")
, greetHttp = require("../greet_http");

var expect = chai.expect;
chai.use(chaiHttp);

describe("greet-http", function() {
  it("handles root request", function(done) {
    chai.request(greetHttp)
      .get("/")
      .end( function(err, resp) {
        expect(err).to.be.null;
        expect(resp).to.have.status(200);
        done();
      });
  });
  it("handles generic greeting", function(done) {
    chai.request(greetHttp)
      .get("/greet")
      .end( function(err, resp) {
        expect(err).to.be.null;
        expect(resp).to.have.status(200);
        expect(resp.text).to.eql("hello");
        done();
      });
  });
  it("handles specific greeting", function(done) {
    chai.request(greetHttp)
      .get("/greet/MyFunkyFriend")
      .end( function(err, resp) {
        expect(err).to.be.null;
        expect(resp).to.have.status(200);
        expect(resp.text).to.eql("hello MyFunkyFriend");
        done();
      });
  });
});
describe("greet POST request", function(done) {
  var err;
  var resp;
  beforeEach(function() {
    chai.request(greetHttp)
    .post("/greet")
    .send( { name: "'My Funky Friend'" } )
    .end( function(e, r) {
      console.log("end: ", e, r.text);
      err = e;
      resp = r;
      done();
    });
  });
  it ("handles POST request greeting", function() {
    expect(err).to.be.null;
    expect(resp).to.have.status(200);
    expect(resp.text).to.eql("hello My Funky Friend");
  });
});
