
    const design_obj = {
        "design_code": "Canadian",
        "support_type": "fixed",
        "units_data": {
            "first_init": true,
            "units": "metric",
            "units_length": "mm",
            "axial_f_units": "kN",
            "units_strength": "MPa",
            "bending_f_units": "kN-m",
            "length_factor": 1,
            "to_mm": 1,
            "to_in": 1,
            "kNm_Kipft": 1,
            "kN_Kip": 1,
            "strength_factor": 0.00689476,
            "units_strength_steel": "MPa",
            "strength_factor_steel": 6.89476
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
                "steel-column-rot": 0,
                "steel-column-height": 0,
                "grout-material-selected": "greater-than-30",
                "steel-column-shape": "rectangular",
                "steel-column-database": "HSS G40.21-C: Square",
                "steel-column-profile": "HS152x152x6.4",
                "steel-column-material": "350W",
                "steel-baseplate-width": 350,
                "steel-baseplate-height": 350,
                "steel-baseplate-thickness": 20,
                "steel-baseplate-grouting-thickness": 0,
                "steel-baseplate-material": "300W",
                "steel-grouting-material": "20.68",
                "steel-foundation-material": "20.68",
                "steel-foundation-width": 450,
                "steel-foundation-height": 450,
                "steel-foundation-thickness": 300
            }
        },
        "anchors": {
            "data": {
                "custom-anchor-fy": 240,
                "custom-anchor-fu": 400,
                "anchor-pattern": "All Sides",
                "anchor-prop-diam": "12.7",
                "anchor-prop-material": "ASTM F1554 G36",
                "anchor-thread-included": "included",
                "anchor-web-bending": "web-bending",
                "use-welded-plate-washers": false,
                "anchor-plate-washer-thickness": 0,
                "anchor-prop-length": 250,
                "anchor-prop-ending": "circular",
                "anchor-prop-side-dim": 60,
                "anchor-prop-thk-dim": 10,
                "hook-direction": "inward",
                "anchor-prop-hook-length": 50,
                "anchor-numbers": 1,
                "anchor-numbers-z": 2,
                "anchor-numbers-y": 2,
                "anchor-spacing-z": 100,
                "anchor-spacing-y": 100,
                "anchor-edge-distance-z": 40,
                "anchor-edge-distance-y": 40,
                "line-anchor-edge-distance-z": 40,
                "line-anchor-edge-distance-y": 40
            }
        },
        "welds": {
            "data": {
                "box-weld-size": 8,
                "input_table_col_weld_size": [
                    [
                        1,
                        "Top Flange",
                        "Both",
                        8
                    ],
                    [
                        2,
                        "Bottom Flange",
                        "Both",
                        8
                    ],
                    [
                        3,
                        "Web",
                        "Both",
                        8
                    ]
                ],
                "custom-weld-fexx": 482,
                "use_welds_for_comp": "false",
                "weld-type": "fillet",
                "weld-setback": 0,
                "welds-column-mat": "E43XX"
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
            "concrete_factor": 0.65,
            "steel_factor": 0.9,
            "steel_ultimate_factor": 0.75,
            "weld_factor": 0.67,
            "anchor_rod_factor": 0.85,
            "anchor_rod_s16_factor": 0.67,
            "concrete_normal_weight_factor": 1,
            "anchors_in_tension_factor": 0.8,
            "anchors_in_shear_factor": 0.75,
            "anchors_in_concrete_failures_factor_tension": 1,
            "anchors_in_concrete_failures_factor_shear": 1,
            "r_factor_steel": "ductile",
            "r_factor_concrete": "condition_b"
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
            "consider_both_directions": true,
            "include_embedded_head_radius": true,
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