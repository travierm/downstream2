// Import the dependencies for testing
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Youtube Search", () => {
    describe("POST /youtube/search", () => {
        
        const route = "/youtube/search"
        it("should load route", (done) => {
            
            chai.request(app)
                .get(route)
                .send({
                    query: "drake"
                })
                .end((err, res) => {                    
                    const results = res.body.results

                    res.should.have.status(200);

                    expect(results).to.not.be.undefined
                    expect(results).to.be.an('array')
                    expect(results[0]).to.be.an('object')

                    done();
                });
        });
    })
})