var myGoals = {
	"goals"	: [
		{
			"name"	: "Train my puppy",
			"count"	: 3,
			"steps"	: [
				{
				"name"	: "Leash training",
				"count"	: 2,
				"steps"	: [
					"Hire weekday dog-walker",
					"Buy small harness and leash"	
					]
				},
				{
				"name"	: "House training",
				"count"	: 2,
				"steps"	: [
					"Save newspapers",
					"Schedule yard time"
					]
				},
				{
				"name"	: "Teach 3 tricks",
				"count"	: 5,
				"steps"	: [
					"Watch 'Uncle Matty' training videos",
					"Get a clicker",
					"Teach sit",
					"Teach stay",
					"Teach roll over"
					]
				}
			]
		},
	]
};

myGoals.list = function(line) {
	$("#stuff").html(stuff);
};