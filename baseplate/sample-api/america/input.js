
const design_obj = {
    "design_code": "American",
    "support_type": "fixed",
    "units_data": {
        "first_init": true,
        "units": "metric",
        "units_length": "mm",
        "axial_f_units": "kN",
        "units_strength": "MPa",
        "units_strength_steel": "MPa",
        "bending_f_units": "kN-m",
        "length_factor": 25.4,
        "strength_factor": 0.00689476,
        "strength_factor_steel": 6.89476,
        "to_mm": 1,
        "to_in": 1,
        "kNm_Kipft": 1,
        "kN_Kip": 1
    },
    "project_details": {
        "project_units": "metric",
        "company": "",
        "designer": "",
        "project_name": "",
        "project_id": "",
        "project_notes": "",
        "client": ""
    },
    "steel_parts": {
        "data": {
            "custom-column-fy": 240,
            "custom-column-fu": 400,
            "custom-bp-fy": 240,
            "custom-bp-fu": 400,
            "custom-conc-fc": 20,
            "use-cracked-concrete": true,
            "steel-column-shape": "i-shape",
            "steel-column-database": "W shapes",
            "steel-column-profile": "W8x31",
            "steel-column-material": "A992",
            "steel-baseplate-width": 400,
            "steel-baseplate-height": 400,
            "steel-baseplate-thickness": 20,
            "steel-baseplate-material": "A36",
            "steel-baseplate-grouting-thickness": 0,
            "steel-foundation-material": "20.68",
            "steel-foundation-width": 450,
            "steel-foundation-height": 450,
            "steel-foundation-thickness": 380
        }
    },
    "anchors": {
        "data": {
            "custom-anchor-fy": 240,
            "custom-anchor-fu": 400,
            "anchor-pattern": "Flange Only",
            "anchor-prop-diam": "12",
            "anchor-prop-material": "F1554 Gr.36",
            "anchor-thread-included": "included",
            "anchor-web-bending": "web-bending",
            "use-welded-plate-washers": false,
            "anchor-plate-washer-thickness": 0,
            "anchor-prop-length": 300,
            "anchor-prop-ending": "rectangle",
            "anchor-prop-side-dim": 60,
            "anchor-prop-thk-dim": 10,
            "hook-direction": "inward",
            "anchor-prop-hook-length": 50,
            "anchor-numbers": 3,
            "anchor-numbers-z": 3,
            "anchor-numbers-y": 2,
            "anchor-spacing-z": 100,
            "anchor-spacing-y": 330,
            "anchor-edge-distance-z": 100,
            "anchor-edge-distance-y": 35,
            "line-anchor-edge-distance-z": 162.5,
            "line-anchor-edge-distance-y": 35
        }
    },
    "welds": {
        "data": {
            "box-weld-size": 9,
            "input_table_col_weld_size": [
                [
                    1,
                    "Top Flange",
                    "Both",
                    9
                ],
                [
                    2,
                    "Bottom Flange",
                    "Both",
                    9
                ],
                [
                    3,
                    "Web",
                    "Both",
                    9
                ]
            ],
            "custom-weld-fexx": 482,
            "use_welds_for_comp": "false",
            "weld-type": "fillet",
            "weld-setback": 0,
            "welds-column-mat": "E70xx"
        }
    },
    "loads": [
        {
            "lc": "1",
            "Mz": "10",
            "My": "0",
            "Nx": "0",
            "Vz": "0",
            "Vy": "0",
            "moment_label": ""
        }
    ],
    "factors": {
        "concrete_bearing_factor": 0.65,
        "steel_bearing_factor": 0.75,
        "steel_flexure_factor": 0.9,
        "weld_factor": 0.75,
        "steel_tension_factor": 0.9,
        "steel_shear_rupture_factor": 0.75,
        "anchor_tension_factor": 0.75,
        "anchor_shear_factor": 0.65,
        "anchor_bolts_factor": 0.75,
        "concrete_tension_factor": 0.7,
        "concrete_shear_factor": 0.65,
        "concrete_normal_weight_factor": 1
    },
    "detailing": {
        "weld_size": true,
        "anchor_clearance": true,
        "bp_edge_distance": true,
        "embed_plate": true,
        "concrete_splitting": true,
        "min_anchors": true
    },
    "design_settings": {
        "neglect_concrete_breakout_for_tension": false,
        "neglect_concrete_breakout_for_shear": false,
        "neglect_concrete_pryout": true,
        "distribute_shear_to_all": true,
        "simplified_approach_shear": true,
        "consider_both_directions": false,
        "include_embedded_head_radius": false,
        "use_sci_for_welds": false
    },
    "version": 2
}

var args = {
    auth: {
        username: "",
        key: ""
    },
    functions: [
        {
            function: 'standalone.baseplate.start',
            arguments: { keep_open: true, },
        },
        {
            function: 'standalone.baseplate.check',
            arguments: design_obj,
        },
    ],
};