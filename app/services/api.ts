import Service from '@ember/service';

export default class ApiService extends Service {
  get host() {
    return 'http://localhost:8200/v1'
  }

  sys = {
    sealStatus: async () => {
      const url = `${this.host}/sys/seal-status`;
      const res = await fetch(url, {
        // headers: {
        //   'x-vault-token': token,
        // }
      });

      if (!res.ok) throw new Error('Bad request to seal status');

      return await res.json();

    },
    health: async () => {
      const url = `${this.host}/sys/health`;
      const res = await fetch(url, {
        // headers: {
        //   'x-vault-token': token,
        // }
      });

      if (!res.ok) throw new Error('Bad request to health');

      return await res.json();
    }
  }

  auth = {
    lookupSelf: async ({ token }: { token: string }) => {
      const url = `${this.host}/auth/token/lookup-self`;
      const res = await fetch(url, {
        headers: {
          'x-vault-token': token,
        }
      });

      if (!res.ok) throw new Error('Bad request to lookup-self');

      return await res.json();
    }
  }
}