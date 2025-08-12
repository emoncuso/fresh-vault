import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type ApiService from 'fresh-vault/services/api';
import type ClusterService from 'fresh-vault/services/cluster';
import type SessionService from 'fresh-vault/services/session';

export default class ApplicationRoute extends Route {
  @service declare readonly api: ApiService;
  @service declare readonly cluster: ClusterService;
  @service declare readonly session: SessionService;

  beforeModel() {
    this.session.setup();
  }

  async model() {
    const [
      health,
      sealStatus
    ] = await Promise.all([
      this.api.sys.health(),
      this.api.sys.sealStatus(),
    ]);

    console.log({ health, sealStatus });

    return {
      health,
      sealStatus
    }
  }

  afterModel(model: unknown) {
    this.cluster.health = model.health;
    this.cluster.sealStatus = model.sealStatus;
  }
}
