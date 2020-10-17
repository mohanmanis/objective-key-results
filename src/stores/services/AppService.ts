const OKRS_URL: string = "https://okrcentral.github.io/sample-okrs/db.json";

export class AppService {

  constructor() {

  }

  fetchAllOkrs = async (): Promise<any> => {
    const response = await fetch(OKRS_URL);
    const okrs = await response.json();
    return okrs;
  }

}

export default new AppService();