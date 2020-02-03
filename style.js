let canvas = document.querySelector("canvas");
let addButton = document.getElementById("addNode");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let nodeWidth = canvas.width / 2;
let nodeHeight = 100;

function drawNode(value, width, height) {
  ctx.beginPath();
  ctx.fillStyle = "#ffd633";
  ctx.arc(width, height, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText(value, width, height + 10);
}

function drawLineLeft(width, height) {
  ctx.beginPath();
  ctx.moveTo(width, height);
  ctx.lineTo(width - 100, height + 100);
  ctx.strokeStyle = "#1cede6";
  ctx.stroke();
  ctx.lineWidth;
}

function drawLineRight(width, height) {
  ctx.beginPath();
  ctx.moveTo(width, height);
  ctx.lineTo(width + 100, height + 100);
  ctx.strokeStyle = "#1cede6";
  ctx.stroke();
}

class Node {
  constructor(value) {
    this.value = value;

    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(value, width, height) {
    let currentNode = new Node(value);

    if (this.root == null) {
      this.root = currentNode;
      drawNode(value, width, height);
    }

    const searchTree = node => {
      if (value < node.value) {
        if (node.left == null) {
          node.left = currentNode;
          nodeWidth = nodeWidth - 100;
          width = nodeWidth;
          nodeHeight = nodeHeight + 100;
          height = nodeHeight;
          drawLineLeft(width + 100, height - 100);
          drawNode(value, width, height);
        } else {
          nodeWidth = nodeWidth - 100;
          width = nodeWidth;
          nodeHeight = nodeHeight + 100;
          height = nodeHeight;
          searchTree(node.left);
        }
      }

      if (value > node.value) {
        if (node.right == null) {
          node.right = currentNode;

          nodeWidth = nodeWidth + 100;
          width = nodeWidth;
          nodeHeight = nodeHeight + 100;
          height = nodeHeight;

          drawLineRight(width - 100, height - 100);
          drawNode(value, width, height);
        } else {
          nodeWidth = nodeWidth + 100;
          width = nodeWidth;
          nodeHeight = nodeHeight + 100;
          height = nodeHeight;
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }
}

let bst = new BST();

addButton.onclick = function() {
  let number = document.getElementById("inputNumber").value;
  let a = parseInt(number);

  bst.insertNode(a, nodeWidth, nodeHeight);

  nodeWidth = canvas.width / 2;
  nodeHeight = 100;

  console.log(bst);
};
