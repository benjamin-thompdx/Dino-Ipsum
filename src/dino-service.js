export class DinoService {
  async getDinoIpsum(input1, input2) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${input1}&words=${input2}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}