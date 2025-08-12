import Service from '@ember/service';

export default class ClusterService extends Service {}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:cluster')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('cluster') declare altName: ClusterService;`.
declare module '@ember/service' {
  interface Registry {
    'cluster': ClusterService;
  }
}
