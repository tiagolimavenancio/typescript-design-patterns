import BinaryTree from './classes/BinaryTree';
import DisplayInOrderVisitor from './classes/DisplayInOrderVisitor';
import DisplayIndentedVisitor from './classes/DisplayIndentedVisitor';
import DisplayPreOrderVisitor from './classes/DisplayPreOrderVisitor';
import DisplayPostOrderVisitor from './classes/DisplayPostOrderVisitor';

function start() {
    const tree = new BinaryTree(7);

    tree.insert(15);
    tree.insert(10);
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(20);

    console.log('### Exibindo em ordem ###');
    tree.accept(new DisplayInOrderVisitor());
    console.log('### Exibindo pre ordem ###');
    tree.accept(new DisplayPreOrderVisitor());
    console.log('### Exibindo pós ordem ###');
    tree.accept(new DisplayPostOrderVisitor());
    console.log('### Exibindo identado ###');
    tree.accept(new DisplayIndentedVisitor());
}

start();