import { service } from '@ember/service';
import Base from 'ember-simple-auth/authenticators/base';
import type ApiService from 'fresh-vault/services/api';

type AuthenticateParams = { token: string, path: string };

export default class TokenAuthenticator extends Base {
  @service declare readonly api: ApiService;

  restore(data: unknown) {
    return Promise.resolve(data);
  }

  async authenticate({ path, token }: AuthenticateParams) {
    console.log({ path, token });

    const res = await this.api.auth.lookupSelf({ token });
    console.log(res)
    return Promise.resolve({
      token,

    });
  }

  invalidate(data: unknown) {
    return Promise.resolve(data);
  }
}
