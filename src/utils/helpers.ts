export const capitalize = (val: string) => {
  if (!val) {
    return val;
  }

  if (typeof val !== 'string') {
    return val;
  }

  return val.charAt(0).toUpperCase() + val.slice(1);
};

export const listToTree = (list: any) => {
  const map: any = {};
  let node;
  const roots = [];
  let i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].items = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node?.ownerId) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.ownerId]].items.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
};

export const stripNonRelevant = (accounts: any[]): any => {
  return accounts.map((account) => {
    if (account?.items?.length) {
      stripNonRelevant(account.items);
    }

    return {
      id: account.id,
      title: account.name,
      parentId: account.ownerId,
      items: account.items ? stripNonRelevant(account.items) : account.items,
    };
  });
};
