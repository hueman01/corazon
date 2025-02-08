const container = document.getElementById("heart-container");
        const text = "Fernanda ";
        const numElements = 150; // Más elementos para mayor tamaño
        const speed = 0.002; 
        let spans = [];

        function heartShape(t) {
            const x = 20 * Math.pow(Math.sin(t), 3); // Aumentar tamaño
            const y = 17 * Math.cos(t) - 6 * Math.cos(2 * t) - 3 * Math.cos(3 * t) - Math.cos(4 * t);
            return { x: x * 15, y: -y * 15 }; // Escalar la figura
        }

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < numElements; i++) {
            let span = document.createElement("span");
            span.className = "text";
            span.innerText = text;
            fragment.appendChild(span);
            spans.push(span);
        }
        container.appendChild(fragment);

        let tOffset = 0;
        function animateHeart() {
            tOffset += speed;
            spans.forEach((span, i) => {
                let pos = heartShape(i * 0.2 + tOffset);
                span.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            });
            requestAnimationFrame(animateHeart);
        }

        animateHeart();
