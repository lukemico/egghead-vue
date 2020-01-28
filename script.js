var card = new Vue({
	el: '#card',
	data: {
		title: 'Dinosaurs',
		input: '',
		speciesUpdated: 0,
		dinosUpdated: 0,
		items: [
			{ text: 'Tyrannosaurus', quantity: 5 },
			{ text: 'Triceratops', quantity: 3 },
			{ text: 'Stegosaurus', quantity: 6 }
		],
		dinos: [
			{
				text: 'Velociraptor',
				weight: '15 kg'
			},
			{
				text: 'triceratops',
				weight: '6,000 kg'
			},
			{
				text: 'Stegosaurus',
				weight: '2,500 kg'
			}
		]
	},
	methods: {
		addDino: function() {
			var input = document.getElementById('itemForm');

			if (input.value !== '') {
				this.items.push({
					text: input.value
				});
				input.value = '';
			}
		},
		deleteDino: function(index) {
			this.items.splice(index, 1);
		},

		addItem: function(e) {
			e.preventDefault();
			if (!this.input) return;

			this.items.push({ text: this.input, quantity: 1 });
			this.input = '';
		},
		removeItem: function(item) {
			this.items.splice(item, 1);
		}
	},
	filters: {
		capitalize: function(value) {
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		undercase: function(value) {
			if (!value) return '';
			value = value.toString();
			return value.toLowerCase();
		},
		url: function(value) {
			if (!value) return '';
			value = value.toString();
			return 'https://en.wikipedia.org/wiki/' + value;
		}
	},
	computed: {
		totalDinos: function() {
			this.dinosUpdated += 1;
			var sum = 0;
			var items = this.items;

			for (var i in items) {
				sum += items[i].quantity;
			}

			return sum;
		},
		totalSpecies: function() {
			this.speciesUpdated += 1;
			return this.items.length;
		}
	}
});
